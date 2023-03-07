<?php

namespace App\Http\Controllers;

use App\Block;
use App\Floor;
use App\Project;
use App\Http\Resources\ProjectResource;
use App\Repository\Contracts\ProjectRepositoryInterface;
use App\Unit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Intervention\Image\Facades\Image;


class ProjectController extends Controller
{
    protected $project;

    public function __construct(ProjectRepositoryInterface $project)
    {
        $this->project = $project;
    }

    public function index()
    {
        $project = $this->project->all();
        ProjectResource::withoutWrapping();
        return ProjectResource::collection($project);
    }

    public function createBlocksAndFloorsAndUnits(Request $request)
    {
//        return response()->json(['name', intval($request->project_id)]);
        $floor_id = array();
        DB::beginTransaction();
        try {
            $newBlock = Block::create(['name' => $request->name, 'project_id' => intval($request->project_id)]);
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json(['error' => 'Error occurred in updating the project.'], 403);
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        try {
//            return response()->json(['name', $newBlock->id]);
            $count = 1;
            while ($count <= $request->floor_number) {
                $newFloor = Floor::create([
                    'block_id' => $newBlock->id,
                    'number' => $count
                ]);
                array_push($floor_id, $newFloor->id);
                $count += 1;
            }
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json(['error' => 'Error occurred in updating the project.'], 403);
        } catch
        (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        try {
            $count1 = 0;
            foreach ($floor_id as $id) {
                $count2 = 1;
                while ($count2 <= $request->units) {
                    $newUnit = Unit::create([
                        'floor_id' => $id,
                        'number' => $count2 + $count1,
                    ]);
                    $count2 += 1;
                }
                $count1 = $request->units;
            }
        } catch (ValidationException $e) {
            DB::rollback();
            return response()->json(['error' => 'Error occurred in updating the project.'], 403);
        } catch
        (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        DB::commit();
        return response()->json(['input' => array([$request->name, $request->floor_number, $request->units])], 200);
    }

    public function store(Request $request)
    {
        $project = Project::create($request->all());
        ProjectResource::withoutWrapping();
        return new ProjectResource($project);
    }

    public function show(Project $project)
    {
        ProjectResource::withoutWrapping();
        return new ProjectResource($project);
    }

    public function viewProject(Request $request)
    {
        $project = $this->project->show($request->id);
        ProjectResource::withoutWrapping();
        return new ProjectResource($project);
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {

    }

    public function addImage(Request $request)
    {
        if ($request->hasFile('file')) {
            $fileName = time() . '.' . $request->file->getClientOriginalExtension();
            $request->file->move(public_path('project_images'), $fileName);
            Project::where('id', $request->id)->update(['image' => $fileName]);

            return response()->json([
                'success' => true,
                'message' => 'You have successfully upload file'
            ]);
        }
        return response()->json([
            'success' => false,
            'message' => 'Error in uploading the file'
        ]);
    }
}
