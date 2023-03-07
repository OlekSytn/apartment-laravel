<?php


namespace App\Repository\Contracts;


interface FloorRepositoryInterface
{
    public function all();

    public function create(array $data);

    public function update(array $data, $id);

    public function delete($id);

    public function floorsForSpecificBlock($id);

    public function show($id);
}
