<?php

use Illuminate\Support\Facades\Vite;

if (!function_exists('theme_vite')) {
    function theme_vite($assets) {
        $theme = config('vite.theme', 'public');
        
        // Keep original build directory for default case
        $buildDirectory = $theme === 'public' ? 'build' : "build/{$theme}";
        $hotFile = $theme === 'public' ? 'hot' : "{$theme}.hot";
        
        // Create and render the Vite tags
        return Vite::useHotFile($hotFile)
            ->useBuildDirectory($buildDirectory)
            ->withEntryPoints($assets)
            ->toHtml();
    }
}