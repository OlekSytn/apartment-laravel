<?php

namespace App\Repository\Contracts;

interface BlockRepositoryInterface
{
    public function all();

    public function create(array $data);

    public function update(array $data, $id);

    public function delete($id);

    public function blocksForSpecificProject($id);

    public function show($id);
}

