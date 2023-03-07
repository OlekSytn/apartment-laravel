<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LandingTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_landing_page_render()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    public function test_booking_page_render()
    {
        $response = $this->get('/the_project');
        $response->assertStatus(200);
    }
}
