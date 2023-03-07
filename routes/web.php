<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/the_project', function () {
    return view('project');
});
Route::get('/your_reservations', function () {
    return view('client_reservation');
});
Route::get('/dashboard', function () {
    return view('dashboard');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/project/create', 'ProjectController@store');
Route::delete('/delete_project/{id}', 'ManageProjectReservationsController@deleteProject');
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
Route::post('/edit_project/{id}', 'ManageProjectReservationsController@editProject');
Route::post('/add_image/{id}', 'ProjectController@addImage');

