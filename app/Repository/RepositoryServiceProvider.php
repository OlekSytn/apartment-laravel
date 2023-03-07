<?php

namespace App\Repository;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{

    public function register()
    {
        $this->registerProjectRepository();
        $this->registerBlockRepository();
        $this->registerFloorRepository();
        $this->registerUnitRepository();
        $this->registerReservationRepository();
        $this->registerManageProjectsReservationsRepository();
    }

    public function registerProjectRepository()
    {
        return $this->app->bind('App\Repository\Contracts\ProjectRepositoryInterface', 'App\Repository\Eloquent\ProjectRepository');
    }

    public function registerBlockRepository()
    {
        return $this->app->bind('App\Repository\Contracts\BlockRepositoryInterface', 'App\Repository\Eloquent\BlockRepository');
    }

    public function registerFloorRepository()
    {
        return $this->app->bind('App\Repository\Contracts\FloorRepositoryInterface', 'App\Repository\Eloquent\FloorRepository');
    }

    public function registerUnitRepository()
    {
        return $this->app->bind('App\Repository\Contracts\UnitRepositoryInterface', 'App\Repository\Eloquent\UnitRepository');
    }

    public function registerReservationRepository()
    {
        return $this->app->bind('App\Repository\Contracts\ReservationRepositoryInterface', 'App\Repository\Eloquent\ReservationRepository');
    }
    public function registerManageProjectsReservationsRepository()
    {
        return $this->app->bind('App\Repository\Contracts\ManageProjectsReservationsRepositoryInterface', 'App\Repository\Eloquent\ManageProjectsReservationsRepository');
    }


}
