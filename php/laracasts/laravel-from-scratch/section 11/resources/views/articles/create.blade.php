@extends ('layout')

@section ('head')
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
@endsection

@section ('content')
    <div id="wrapper">
        <div id="page" class="container">
            <h1 class="heading has-text-weight-bold is-size-4">New Article</h1>

            <form action="/articles" method="post">
                @csrf
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input class="input @error('title') is-danger @enderror" type="text" name="title" value="{{ old('title') }}">
                        @error('title')
                        <p class="help is-danger">{{ $errors->first('title') }}</p>
                        @enderror
                    </div>
                </div>
                <div class="field">
                    <label class="label">Excerpt</label>
                    <div class="control">
                        <input class="input @error('excerpt') is-danger @enderror" type="text" name="excerpt" value="{{ old('excerpt') }}">
                        @error('excerpt')
                        <p class="help is-danger">{{ $errors->first('excerpt') }}</p>
                        @enderror
                    </div>
                </div>
                <div class="field">
                    <label class="label">Body</label>
                    <div class="control">
                        <textarea class="input @error('body') is-danger @enderror" name="body">{{ old('body') }}</textarea>
                        @error('body')
                        <p class="help is-danger">{{ $errors->first('body') }}</p>
                        @enderror
                    </div>
                </div>
                <div class="field">
                    <label class="label">Tags</label>
                    <div class="control is-multiple select">
                        <select name="tags[]" multiple>
                            @foreach ($tags as $tag)
                                <option value="{{ $tag->id }}">{{ $tag->name }}</option>
                            @endforeach
                        </select>
                        @error('tags')
                        <p class="help is-danger">{{ $message }}</p>
                        @enderror
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
