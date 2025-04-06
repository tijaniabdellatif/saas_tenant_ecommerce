<!DOCTYPE html>
<html  lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.ico') }}" />
    <title inertia>{{ config('app.name', 'Enimsay') }}</title>

    <!-- Fonts -->
   
    <!-- Scripts -->
    @routes
    @viteReactRefresh

    @php
    $host = request()->getHost();
    $path = request()->path();
    @endphp

    @if(str_contains($host, '.saas.test') && $path === 'dashboard')
    @vite(['resources/css/tenant.css', 'resources/js/app.tsx'])
    @elseif(str_contains($host, '.saas.test'))
    @vite(['resources/css/tenant.css', 'resources/js/app.tsx'])
    @elseif($host === 'saas.test' && str_starts_with($path, 'admin'))
    @vite(['resources/css/admin.css', 'resources/js/app.tsx'])
    @else
    @vite(['resources/css/public.css', 'resources/js/app.tsx'])
    @endif
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>