<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Project;
use Faker\Generator as Faker;

$factory->define(App\Project::class, function (Faker $faker) {
    return [
       'name' => $faker->name,
        'tag' => $faker->sentence,
        'description' => $faker->sentence
    ];
});
