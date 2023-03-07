<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $table = 'reservations';
    protected $fillable = ['user_id', 'unit_id', 'status'];
    public function units(){
        return $this->belongsTo('App\Unit', 'unit_id');
    }
}
