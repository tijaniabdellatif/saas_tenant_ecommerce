<?php


/*
    |--------------------------------------------------------------------------
    | Allowed Transition Routes
    |--------------------------------------------------------------------------
    |
    | This array contains all routes that are allowed to use the transition/loader
    | page. Only routes starting with these paths will be permitted to use the
    | transition effect for security reasons.
    |
    */
return [

    'allowed_routes' => [

        '/enimsay-product',
        "/conditions"
    ],



    /*
    |--------------------------------------------------------------------------
    | Transition Time
    |--------------------------------------------------------------------------
    |
    | The time in milliseconds that the transition/loader page will be shown
    | before redirecting to the destination page.
    |
    */
    'transition_time' => 10000, // 6 seconds

];

 
