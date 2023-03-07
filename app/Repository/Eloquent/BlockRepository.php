<?php

namespace App\Repository\Eloquent;
use App\Block;
use App\Repository\Contracts\BlockRepositoryInterface;

class BlockRepository implements BlockRepositoryInterface
{

    public function all()
    {
        return Block::all();
    }

    public function blocksForSpecificProject($id)
    {
        return Block::where('project_id', $id)->where('status', 'available')->get();
    }

    public function create(array $data)
    {

        return Block::create($data);
    }

    public function update(array $data, $id)
    {
        $record = Block::find($id);
        return $record->update($data);
    }

    public function delete($id)
    {
        return Block::destroy($id);
    }

    public function show($id)
    {
        return Block::findOrFail($id);
    }
}
