<?php


namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Repository\Contracts\BlockRepositoryInterface;
use Illuminate\Http\Request;

class BlockController extends Controller
{
    protected $block;

    public function __construct(BlockRepositoryInterface $block)
    {
        $this->block = $block;
    }

    public function getSpecificProjectBlocks(Request $request)
    {
        $block = $this->block->blocksForSpecificProject(intval($request->id)
        );
        ProjectResource::withoutWrapping();
        return ProjectResource::collection($block);
    }
}
