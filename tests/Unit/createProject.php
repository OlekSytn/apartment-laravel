<?php

namespace Tests\Unit;

use App\Project;
use Tests\TestCase;

class createProject extends TestCase
{
    public function test_can_create_project()
    {
        $data = [
            'name' => $this->faker->name,
            'tag' => $this->faker->sentence,
            'description' => $this->faker->paragraph
        ];
        $this->post("project/create", $data)
            ->assertStatus(201)
            ->assertJson($data);
    }

    public function test_fetch_project()
    {
        $response = $this->get("project/fetch")
            ->assertStatus(200);
    }

    public function test_edit_project()
    {
        $project = factory(Project::class)->create();
        $data = [
            'name' => $this->faker->name,
            'tag' => $this->faker->sentence,
            'description' => $this->faker->paragraph
        ];
        $this->post("edit_project/$project->id", $data)
            ->assertStatus(200);
    }

    public function test_can_delete_project()
    {
        $project = factory(Project::class)->create();
        $this->delete("delete_project/$project->id")
            ->assertStatus(200);
    }
    public function test_can_list_projects() {
        $project = factory(Project::class, 2)->create()->map(function ($project) {
            return $project->only(['id', 'name', 'tag', 'description']);
        });
        $this->get("project/fetch")
            ->assertStatus(200)
            ->assertJson($project->toArray())
            ->assertJsonStructure([
                '*' => ['id', 'name', 'tag', 'description'],
            ]);
    }

}
