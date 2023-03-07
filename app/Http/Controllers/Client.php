<?php

namespace App\Http\Controllers;

use App\Repository\Contracts\ReservationRepositoryInterface;
use App\Reservation;
use App\Unit;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class Client extends Controller
{

    protected $reservation;

    public function __construct(ReservationRepositoryInterface $reservation)
    {
        $this->reservation = $reservation;
    }

    public function getUser(Request $request)
    {
        try {
            $user = User::where('email', $request->email)->firstOrFail();
            return response()->json($user);
        } catch (\Exception $e) {
            return response()->json("User not found", 404);
        }
    }

    public function viewClients()
    {
        $user = User::where('role_id', 2)->get();
        return response()->json($user, 200);
    }

    public function removeClient(Request $request)
    {
        $reservation = Reservation::where('user_id', $request->id)->pluck('id');
        if (sizeof($reservation) == 0) {
            User::where('id', $request->id)->delete();
            return response()->json('User Deleted', 200);
        } else {
            DB::beginTransaction();
            try {
                foreach ($reservation as $reserve) {
                    $this->reservation->deleteReservation($reserve);
                }
            } catch (ValidationException $e) {
                DB::rollback();
                return response()->json('Error occured in deleting the client', 403);
            } catch (\Exception $e) {
                DB::rollback();
                throw $e;
            }
            try {

            } catch (ValidationException $e) {
                DB::rollback();
                return response()->json('Error occured in deleting the client', 403);
            } catch (\Exception $e) {
                DB::rollback();
                throw $e;
            }
            DB::commit();
        }
    }
}
