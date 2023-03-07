<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Floor extends Model
{
    protected $table = 'floors';
    protected $fillable = ['block_id', 'number', 'status'];
    public function block(){
        return $this->belongsTo('App\Block');
    }
    public function unit(){
        return $this->hasMany('App\Unit', 'floor_id');
    }
}
