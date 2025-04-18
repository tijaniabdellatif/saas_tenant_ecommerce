<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class TransitionController extends Controller
{

    public function show(Request $request)
    {

        $validator = Validator::make($request->all(), [

            'destination' => 'required|string'
        ]);

        if ($validator->fails()) {

            return redirect()->route('welcome');
        }

        $destination = $request->input('destination');
        $referrer = $request->input('referrer') ?? $request->header('referer');

        // If direct access, just redirect to the destination
        

        if (!$this->isValidRoute($destination)) {
            return redirect()->route('welcome');
        }

        return Inertia::render('Public/TransitionLoader', [
            'nextRoute' => $destination,
            "transitionTime" => Config::get('transition.transition_time', 8000),
            "replaceHistory" => true,
            'referrer' => $referrer
        ]);
    }

    public function isValidRoute($route)
    {

        $allowedRoutes = Config::get('transition.allowed_routes', []);

        foreach ($allowedRoutes as $allowed) {

            if (strpos($route, $allowed) === 0) {

                return true;
            }
        }

        return false;
    }
}
