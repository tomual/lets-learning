<?php

use Illuminate\Support\Facades\Route;

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

use App\Http\Controllers\PostsController;
use App\Http\Controllers\ArticlesController;

Route::get('', function () {
    return view('welcome');
});
Route::get('contact', function () {
    return view('contact');
});
Route::get('about', function () {
    return view('about');
});
Route::get('posts/{post}', [PostsController::class, 'show']);

Route::get('/about', function () {
    $articles = App\Models\Article::take(3)->latest()->get();
    return view('about', compact('articles'));
});

Route::get('articles', [ArticlesController::class, 'index']);
Route::get('articles/create', [ArticlesController::class, 'create']);
Route::post('articles', [ArticlesController::class, 'store']);
Route::get('articles/{article}/edit', [ArticlesController::class, 'edit']);
Route::get('articles/{article}', [ArticlesController::class, 'show']);
Route::put('articles/{article}', [ArticlesController::class, 'update']);
