<?php


namespace App\Repository\Contracts;


interface ReservationRepositoryInterface
{
    public function bookApartmentUnits($data, $user);
    public function fetchReservations();
    public function fetchAllReservations();
    public function deleteReservation($id);
}
