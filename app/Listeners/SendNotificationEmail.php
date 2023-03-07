<?php

namespace App\Listeners;

use App\Events\ClientBookedApartment;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendNotificationEmail
{
    public function __construct()
    {
    }

    public function handle(ClientBookedApartment $event)
    {
        $client = $event[0];
//        return response()->json($client);
        $booking_details = $event[1];
        $data = array('name' => $client->name, 'email' => $client->email, 'details' => $booking_details);
        Mail::send('emails.bookings', $data, function ($message) use ($data) {
            $message->to($data['email'])
                ->subject('Apartment Reservations');
            $message->from('cokola@cytonn.com');
        });
    }
}
