<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Block extends Model
{
    protected $table = 'blocks';
    protected $fillable = ['name', 'project_id', 'status'];
    public function project(){
        return $this->belongsTo('App\Project');
    }
    public function floor(){
        return $this->hasMany('App\Floor', 'block_id');
    }
}
