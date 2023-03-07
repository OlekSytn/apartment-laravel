<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Repository\Contracts\UnitRepositoryInterface;
use Illuminate\Http\Request;

class UnitController extends Controller
{

    protected $unit;

    public function __construct(UnitRepositoryInterface $unit)
    {
        $this->unit = $unit;
    }

    public function getSpecificFloorUnits(Request $request)
    {
        $unit = $this->unit->unitsForSpecificFloor(intval($request->id)
        );
        ProjectResource::withoutWrapping();
        return ProjectResource::collection($unit);
    }
}
