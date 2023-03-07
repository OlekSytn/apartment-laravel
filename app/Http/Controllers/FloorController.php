<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Repository\Contracts\FloorRepositoryInterface;
use Illuminate\Http\Request;

class FloorController extends Controller
{
    protected $floor;

    public function __construct(FloorRepositoryInterface $floor)
    {
        $this->floor = $floor;
    }

    public function getSpecificBlockFloors(Request $request)
    {
        $floor = $this->floor->floorsForSpecificBlock(intval($request->id)
        );
        ProjectResource::withoutWrapping();
        return ProjectResource::collection($floor);
    }
}
