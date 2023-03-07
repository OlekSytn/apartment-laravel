<?php

namespace App\Events;

use App\Http\Controllers\ReservationController;
//use App\Reservation;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ClientBookedApartment
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $reservation;

    /**
     * Create a new event instance.
     *
     * @param Reservation $reservation
     */
    public function __construct(ReservationController $reservation)
    {
       $this->reservation = $reservation;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
