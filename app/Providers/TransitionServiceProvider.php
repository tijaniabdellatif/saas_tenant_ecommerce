<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class TransitionServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            __DIR__ . '/../../config/transition.php',
            'transition'
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->publishes([

            __DIR__ . '/../../config/transition.php' => config_path('transition.php'),
        ], 'transition-config');
    }
}
