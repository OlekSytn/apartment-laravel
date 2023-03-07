<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/project/create', 'ProjectController@store');
Route::get('/project/fetch', 'ProjectController@index');
Route::post('/project/add_blocks_floor_units', 'ProjectController@createBlocksAndFloorsAndUnits');
Route::get('/block/project_blocks/{id}', 'BlockController@getSpecificProjectBlocks');
Route::get('/block/block_floors/{id}', 'FloorController@getSpecificBlockFloors');
Route::get('/block/floor_units/{id}', 'UnitController@getSpecificFloorUnits');
Route::get('/project/view_project/{id}', 'ProjectController@viewProject');
Route::get('/fetch_user_reservations', 'ReservationController@fetchSpecificClientReservations');
Route::get('/fetch_all_reservations', 'ReservationController@fetchAllReservations');
Route::delete('/delete_reservation/{id}', 'ReservationController@deleteReservation' );
Route::post('/book_apartment_for_client', 'ReservationController@bookForClient' );
Route::post('/book_apartment', 'ReservationController@bookUnit');
Route::post('/get_user', 'Client@getUser');
Route::get('/fetch_clients', 'Client@viewclients');
Route::delete('/remove_client/{id}', 'Client@removeClient');
Route::delete('/delete_project/{id}', 'ManageProjectReservationsController@deleteProject');
Route::post('/add_image/{id}', 'ProjectController@addImage');


