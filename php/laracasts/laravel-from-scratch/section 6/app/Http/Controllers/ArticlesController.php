<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    public function index()
    {
        $articles = Article::latest()->get();

        return view('articles.index', compact('articles'));
    }

    public function show(Article $article)
    {
        return view('articles.show', compact('article'));
    }

    public function create()
    {
        return view('articles.create');
    }

    public function store()
    {
        $validated = request()->validate([
            'title' => ['required', 'min:3', 'max:25'],
            'excerpt' => ['required', 'min:3', 'max:25'],
            'body' => ['required', 'min:3', 'max:25'],
        ]);

        Article::create($validated);

        return redirect('articles');
    }

    public function edit(Article $article)
    {
        return view('articles.edit', compact('article'));
    }

    public function update(Article $article)
    {
        $validated = request()->validate([
            'title' => ['required', 'min:3', 'max:25'],
            'excerpt' => ['required', 'min:3', 'max:25'],
            'body' => ['required', 'min:3', 'max:25'],
        ]);
        $article->update($validated);

        return redirect("articles/" . $article->id);
    }
}
