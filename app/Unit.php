<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    protected $table = 'units';
    protected $fillable = ['floor_id', 'number', 'status'];
    public function floor(){
        return $this->belongsTo('App\Floor');
    }
    public function reservations(){
        return $this->hasOne('App\Reservation');
    }
}
