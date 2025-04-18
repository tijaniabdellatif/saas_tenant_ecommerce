<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Public\TransitionController;
use App\Http\Controllers\Tenant\TenantController;
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


Route::middleware(['web', 'guest'])->group(function () {


    Route::get('/transition', [TransitionController::class, 'show'])->name('transition');

    Route::get('/', function () {
        return Inertia::render('Public/Index', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'title' => 'Home',
            'showNavigation' => true
        ]);
    })->name('welcome');


    Route::get('/conditions', function () {

        return Inertia::render('Public/Conditions', [
            'title' => 'conditions',
            "showNavigation" => false
        ]);
    })->name('conditions');


    Route::get('/enimsay-product', function () {

        return Inertia::render('Public/LearnMore', [

            'title' => 'Enimsay product',
            'showNavigation' => false
        ]);
    })->name('enimsay-product');
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

require __DIR__ . '/auth.php';
