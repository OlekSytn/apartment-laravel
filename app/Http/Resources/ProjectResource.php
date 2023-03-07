<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
//        return [
//
//            'id' => (int)$this->id,
//            'name' => (string)$this->name,
//            'description' => (string)$this->description,
//            'created_at' => (string)$this->created_at,
//            'updated_at' => (string)$this->updated_at,
//        ];
        return parent::toArray($request);
    }
}
