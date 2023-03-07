<?php


namespace App\Repository\Contracts;


interface UnitRepositoryInterface
{
    public function all();

    public function create(array $data);

    public function update(array $data, $id);

    public function delete($id);

    public function unitsForSpecificFloor($id);

    public function show($id);
}
