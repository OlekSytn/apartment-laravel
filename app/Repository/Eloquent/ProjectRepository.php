<?php

namespace App\Repository\Eloquent;

use App\Project;
use App\Repository\Contracts\ProjectRepositoryInterface;
use Intervention\Image\Facades\Image;

class ProjectRepository implements ProjectRepositoryInterface
{

    public function all()
    {
        return Project::all();
    }

    public function create(array $data)
    {

        return Project::create($data);
    }

    public function update(array $data, $id)
    {
        $record = Project::find($id);
        return $record->update($data);
    }

    public function delete($id)
    {
        return Project::destroy($id);
    }

    public function show($id)
    {
        return Project::findOrFail($id);
    }


    public function addImage($file, $ifExist, $id)
    {
        // TODO: Implement addImage() method.
    }
}
