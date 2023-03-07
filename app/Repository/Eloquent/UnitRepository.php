<?php


namespace App\Repository\Eloquent;


use App\Repository\Contracts\UnitRepositoryInterface;
use App\Unit;

class UnitRepository implements UnitRepositoryInterface
{
    public function all()
    {
        return Unit::all();
    }

    public function unitsForSpecificFloor($id)
    {
        return Unit::where('floor_id', $id)->where('status', 'available')->get();
    }

    public function create(array $data)
    {
        return Unit::create($data);
    }

    public function update(array $data, $id)
    {
        $record = Unit::find($id);
        return $record->update($data);
    }

    public function delete($id)
    {
        return Unit::destroy($id);
    }

    public function show($id)
    {
        return Unit::findOrFail($id);
    }
}
