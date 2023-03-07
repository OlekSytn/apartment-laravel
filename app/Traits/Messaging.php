<?php


namespace App\Traits;

use AfricasTalking\SDK\AfricasTalking;

trait Messaging
{
    public function sendSms($phone, $message)
    {
        $username = "cetsuites";
        $apikey = "98c2768a99d977b79e20d9399bdc07c732c02ff1638c499524fe50f42924437d";
        $AT = new AfricasTalking($username, $apikey);
        $sms = $AT->sms();
        return $result = $sms->send([
            'to' => $phone,
            'message' => $message
        ]);
    }
}
