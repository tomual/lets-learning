<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    public function index()
    {
        if (request('tag')) {
            $articles = Tag::where('name', request('tag'))->firstOrFail()->articles;
        } else {
            $articles = Article::latest()->get();
        }

        return view('articles.index', compact('articles'));
    }

    public function show(Article $article)
    {
        return view('articles.show', compact('article'));
    }

    public function create()
    {
        $tags = Tag::all();
        return view('articles.create', compact('tags'));
    }

    public function store()
    {
        $article = new Article($this->validatedArticle());
        $article->user_id = 1;
        $article->save();
        $article->tags()->attach(request('tags'));

        return redirect('articles');
    }

    public function edit(Article $article)
    {
        return view('articles.edit', compact('article'));
    }

    public function update(Article $article)
    {
        $article->update($this->validatedArticle());

        return redirect("articles/" . $article->id);
    }

    public function validatedArticle()
    {
        return request()->validate([
            'title' => ['required', 'min:3', 'max:25'],
            'excerpt' => ['required', 'min:3', 'max:25'],
            'body' => ['required', 'min:3', 'max:25'],
            'tags' => 'exists:tags,id'
        ]);
    }
}
