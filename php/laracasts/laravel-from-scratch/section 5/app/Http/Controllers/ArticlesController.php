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

    public function show($id)
    {
        $article = Article::find($id);

        return view('articles.show', compact('article'));
    }

    public function create()
    {
        return view('articles.create');
    }

    public function store()
    {
        request()->validate([
            'title' => ['required', 'min:3', 'max:25'],
            'excerpt' => ['required', 'min:3', 'max:25'],
            'body' => ['required', 'min:3', 'max:25'],
        ]);
        $article = new Article();
        $article->title = request('title');
        $article->excerpt = request('excerpt');
        $article->body = request('body');
        $article->save();

        return redirect('articles');
    }

    public function edit($id)
    {
        $article = Article::find($id);
        return view('articles.edit', compact('article'));
    }

    public function update($id)
    {
        request()->validate([
            'title' => ['required', 'min:3', 'max:25'],
            'excerpt' => ['required', 'min:3', 'max:25'],
            'body' => ['required', 'min:3', 'max:25'],
        ]);
        $article = Article::find($id);
        $article->title = request('title');
        $article->excerpt = request('excerpt');
        $article->body = request('body');
        $article->save();

        return redirect("articles/" . $id);
    }
}
