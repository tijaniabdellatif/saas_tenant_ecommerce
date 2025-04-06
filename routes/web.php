<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Tenant\TenantController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::middleware(['web','guest'])->group(function () {
    
    Route::get('/', function () {
        return Inertia::render('Public/Index', [
             'canLogin' => Route::has('login'),
             'canRegister' => Route::has('register'),
             'laravelVersion' => Application::VERSION,
             'phpVersion' => PHP_VERSION,
         ]);
     })->name('welcome');

   
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('tenants', TenantController::class);
});

require __DIR__.'/auth.php';
