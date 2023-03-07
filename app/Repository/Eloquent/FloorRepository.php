<?php


namespace App\Repository\Eloquent;

use App\Floor;
use App\Repository\Contracts\FloorRepositoryInterface;

class FloorRepository implements FloorRepositoryInterface
{
    public function all()
    {
        return Floor::all();
    }

    public function floorsForSpecificBlock($id)
    {
        return Floor::where('block_id', $id)->where('status', 'available')->get();
    }

    public function create(array $data)
    {

        return Floor::create($data);
    }

    public function update(array $data, $id)
    {
        $record = Floor::find($id);
        return $record->update($data);
    }

    public function delete($id)
    {
        return Floor::destroy($id);
    }

    public function show($id)
    {
        return Floor::findOrFail($id);
    }
}
