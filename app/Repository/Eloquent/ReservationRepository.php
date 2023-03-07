<?php

namespace App\Repository\Eloquent;

use App\Block;
use App\Floor;
use App\Http\Controllers\Client;
use App\Project;
use App\Repository\Contracts\ReservationRepositoryInterface;
use App\Reservation;
use App\Traits\Messaging;
use App\Unit;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;

class ReservationRepository implements ReservationRepositoryInterface
{
    use Messaging;
    /**
     * @var bool
     */
    private $succeed;

    public function __construct()
    {
        $this->succeed = false;
    }

    public function bookApartmentUnits($unitsId, $user)
    {
        if ($user == ''){
            return response()->json(['error' => false, 'status'=>404], 404);
        }
        if (sizeof($unitsId) == 0) {
            return response()->json(['error' => 'Booking not successfull. No unit selected', 'status'=>403], 403);
        }
        try {
            $newReservation = array();
            foreach ($unitsId as $id) {
                $reservation = new Reservation();
                $reservation->user_id = $user;
                $reservation->unit_id = $id;
                $reservation->save();
                Unit::where('id', $id)->update(['status' => 'unavailable']);
                $floor_id = DB::table('units')->where('id', '=', $id)->pluck('floor_id');
                $available_floor_count = Unit::where('status', 'available')->where('floor_id', '=', intval($floor_id[0]))->count();
                if ($available_floor_count == 0) {
                    Floor::where('id', intval($floor_id[0]))->update(['status' => 'unavailable']);
                }
                $block_id = DB::table('floors')->where('id', '=', intval($floor_id[0]))->pluck('block_id');
                $available_block_count = Floor::where('status', 'available')->where('block_id', '=', intval($block_id[0]))->count();
                if ($available_block_count == 0) {
                    Block::where('id', intval($block_id[0]))->update(['status' => 'unavailable']);
                }
                $project_id = DB::table('blocks')->where('id', '=', intval($block_id[0]))->pluck('project_id');
                $available_project_count = Block::where('status', 'available')->where('project_id', '=', intval($project_id[0]))->count();
                if ($available_project_count == 0) {
                    Project::where('id', intval($project_id[0]))->update(['status' => 'unavailable']);
                }
            }
            $this->succeed = true;
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error occurred in booking the apartment.'], 403);
        }
        if ($this->succeed == true) {
            $data = [];
            foreach ($unitsId as $id) {
                $reserv = DB::table('reservations')
                    ->join('units', 'units.id', '=', 'reservations.unit_id')
                    ->join('floors', 'units.floor_id', '=', 'floors.id')
                    ->join('blocks', 'floors.block_id', '=', 'blocks.id')
                    ->select('reservations.id', 'units.id as unit_id', 'units.number as unit_number', 'floors.number as floor_number', 'blocks.name as block')
                    ->where('reservations.unit_id', '=', $id)
                    ->get();

                array_push($data, $reserv);
            }

            Mail::send('emails.bookings', ['details' => json_encode($data), 'name'=>Auth::user()->name], function ($message) {
                $message->to(Auth::user()->email)
                    ->subject('Apartment Reservations');
                $message->from('cokola@cytonn.com');
            });

            $message = "Dear ".Auth::user()->name." you have successfully booked one of our apartments. Log in to your cetsuites account to view more details.Thankk you.";
            $sms = $this->sendSms("0".Auth::user()->phone, $message);
            return $data;
        }
    }

    public function fetchReservations()
    {

        return DB::table('reservations')
            ->join('units', 'units.id', '=', 'reservations.unit_id')
            ->join('floors', 'units.floor_id', '=', 'floors.id')
            ->join('blocks', 'floors.block_id', '=', 'blocks.id')
            ->join('projects', 'blocks.project_id', '=', 'projects.id')
            ->select('reservations.id', 'units.id as unit_id', 'units.number as unit_number', 'floors.number as floor_number', 'blocks.name as block', 'projects.name as project')
            ->where('reservations.user_id', '=', 1)
            ->get();
    }

    public function fetchAllReservations()
    {
        return DB::table('reservations')
            ->join('units', 'units.id', '=', 'reservations.unit_id')
            ->join('users', 'users.id', '=', 'reservations.user_id')
            ->join('floors', 'units.floor_id', '=', 'floors.id')
            ->join('blocks', 'floors.block_id', '=', 'blocks.id')
            ->join('projects', 'blocks.project_id', '=', 'projects.id')
            ->select('reservations.id', 'users.email as client_email', 'users.name as client_name', 'units.number as unit_number', 'floors.number as floor_number', 'blocks.name as block', 'projects.name as project')
            ->get();
    }

    public function deleteReservation($id)
    {
        DB::beginTransaction();
        $units_available = 0;
        $available_floor = 0;
        $available_block = 0;
        try {
            $unit_ids = Reservation::where('id', $id)->pluck('unit_id');
            Unit::where('id', intval($unit_ids[0]))->update(['status' => 'available']);
            $this->$units_available = intval($unit_ids[0]);

        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        try {
            $floor_id = DB::table('units')->where('id', '=', $this->$units_available)->pluck('floor_id');
            $available_floor_count = Unit::where('status', 'unavailable')->where('floor_id', '=', intval($floor_id[0]))->count();
            if ($available_floor_count === 0) {
                Floor::where('id', intval($floor_id[0]))->update(['status' => 'available']);
            }
            $this->$available_floor = intval($floor_id[0]);
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        try {
            $block_id = DB::table('floors')->where('id', '=', $this->$available_floor)->pluck('block_id');
            $available_block_count = Floor::where('status', 'unavailable')->where('block_id', '=', intval($block_id[0]))->count();
            if ($available_block_count == 0) {
                Block::where('id', intval($block_id[0]))->update(['status' => 'available']);
            }
            $this->$available_block = intval($block_id[0]);
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        try {
            $project_id = DB::table('blocks')->where('id', '=', $this->$available_block)->pluck('project_id');
            $available_project_count = Block::where('status', 'unavailable')->where('project_id', '=', intval($project_id[0]))->count();
            if ($available_project_count == 0) {
                Project::where('id', intval($project_id[0]))->update(['status' => 'available']);
            }
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        //delete reservation
        try {
            Reservation::where('id', $id)->delete();
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        DB::commit();
    }
}
