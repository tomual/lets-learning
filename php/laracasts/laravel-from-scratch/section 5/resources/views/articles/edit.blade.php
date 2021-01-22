@extends ('layout')

@section ('head')
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
@endsection

@section ('content')
    <div id="wrapper">
        <div id="page" class="container">
            <h1 class="heading has-text-weight-bold is-size-4">Edit Article</h1>

            <form action="/articles/{{ $article->id }}" method="post">
                @csrf
                @method('PUT')
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input class="input" type="text" name="title" value="{{ $article->title }}">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Excerpt</label>
                    <div class="control">
                        <input class="input" type="text" name="excerpt" value="{{ $article->title }}">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Body</label>
                    <div class="control">
                        <textarea class="input" name="body">{{ $article->title }}</textarea>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button is-link" type="submit">Submit</button>
                    </div>
                </div>
            </form>
            
        </div>
    </div> 
@endsection
