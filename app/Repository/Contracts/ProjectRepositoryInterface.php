<?php


namespace App\Repository\Contracts;

interface ProjectRepositoryInterface
{
    public function all();

    public function create(array $data);

    public function update(array $data, $id);

    public function delete($id);

    public function show($id);
    public function addImage($file, $ifExist, $id);
}
