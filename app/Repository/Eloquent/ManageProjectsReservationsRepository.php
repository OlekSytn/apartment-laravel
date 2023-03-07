<?php


namespace App\Repository\Eloquent;


use App\Block;
use App\Floor;
use App\Http\Resources\ProjectResource;
use App\Project;
use App\Repository\Contracts\ManageProjectsReservationsRepositoryInterface;
use App\Reservation;
use App\Unit;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class ManageProjectsReservationsRepository implements ManageProjectsReservationsRepositoryInterface
{

    public function deleteProject($id)
    {
        $floors = array();
        $units = array();
        $unit_array = array();
        $blocks = Block::where('project_id', $id)->pluck('id');
        foreach ($blocks as $block) {
            $newFloor = Floor::where('block_id', $block)->pluck('id');
            array_push($floors, $newFloor);
        }
        foreach ($floors as $floor_id) {
            $newUnit = Unit::where('floor_id', $floor_id)->pluck('id');
            array_push($units, $newUnit);
        }
        foreach ($units as $unit_ids) {
            foreach ($unit_ids as $unit_id) {
                array_push($unit_array, $unit_id);
            }
        }
        DB::beginTransaction();
        //delete reservations
        try {
            foreach ($unit_array as $unit_array_id) {
                Reservation::where('unit_id', $unit_array_id)->delete();
            }
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }

        //delete units
        try {
            foreach ($floors as $floors_id) {
                Unit::where('floor_id', $floors_id)->delete();
            }
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        // delete floors
        try {
            foreach ($blocks as $block_id) {
                Floor::where('block_id', $block_id)->delete();
            }
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }

        //delete blocks
        try {
            Block::where('project_id', $id)->delete();

        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }

        //deleteProject
        try {
            Project::where('id', $id)->delete();

        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        DB::commit();
    }

    public function deleteBlocks($id)
    {
        $units = array();
        $unit_array = array();
        $floors = Floor::where('block_id', $id)->pluck('id');
        foreach ($floors as $floor_id) {
            $newUnit = Unit::where('floor_id', $floor_id)->pluck('id');
            array_push($units, $newUnit);
        }
        foreach ($units as $unit_ids) {
            foreach ($unit_ids as $unit_id) {
                array_push($unit_array, $unit_id);
            }
        }
        DB::beginTransaction();
        //delete reservations
        try {
            foreach ($unit_array as $unit_array_id) {
                Reservation::where('unit_id', $unit_array_id)->delete();
            }
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }

        //delete units
        try {
            foreach ($floors as $floors_id) {
                Unit::where('floor_id', $floors_id)->delete();
            }
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        // delete floors
        try {
            Floor::where('block_id', $id)->delete();
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }

        //delete blocks
        try {
            Block::where('id', $id)->delete();

        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        DB::commit();
    }

    public function deleteFloors($id)
    {
        $units = Unit::where('floor_id', $id)->pluck('id');
        DB::beginTransaction();

        //delete reservations
        try {
            foreach ($units as $unit_id) {
                Reservation::where('unit_id', $unit_id)->delete();
            }
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }

        //delete units
        try {
            Unit::where('floor_id', $id)->delete();
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        // delete floor
        try {
            Floor::where('id', $id)->delete();
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        DB::commit();
    }

    public function deleteUnits($id)
    {
        DB::beginTransaction();
        try {
            Reservation::where('unit_id', $id)->delete();
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }

        //delete units
        try {
            Unit::where('id', $id)->delete();
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json('Error occured in deleting the project', 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        DB::commit();
    }

    public function editProject($id, $data)
    {
        return Project::where('id', $id)->update($data);
    }
}
