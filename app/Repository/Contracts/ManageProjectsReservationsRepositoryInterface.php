<?php


namespace App\Repository\Contracts;

interface ManageProjectsReservationsRepositoryInterface
{
    public function deleteProject($id);

    public function deleteBlocks($id);

    public function deleteFloors($id);

    public function deleteUnits($id);

    public function editProject($id, $data);
}
