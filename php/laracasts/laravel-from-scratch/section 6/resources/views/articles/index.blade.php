@extends ('layout')

@section ('content')
<div id="wrapper">
    <div id="page" class="container">
        @foreach($articles as $article)
        <div id="content">
            <div class="title">
                <h2><a href="{{ $article->path() }}">{{ $article->title }}</a></h2>
                <span class="byline">Mauris vulputate dolor sit amet nibh</span> </div>
            <p><img src="/images/banner.jpg" alt="" class="image image-full" /> </p>
            {{ $article->excerpt }}
        </div>
        @endforeach
        <div id="sidebar">
            <ul class="style1">
            </ul>
            <div id="stwo-col">
                <div class="sbox1">
                    <h2>Etiam rhoncus</h2>
                    <ul class="style2">
                        <li><a href="#">Semper quis egetmi dolore</a></li>
                        <li><a href="#">Quam turpis feugiat dolor</a></li>
                        <li><a href="#">Amet ornare hendrerit lectus</a></li>
                        <li><a href="#">Quam turpis feugiat dolor</a></li>
                    </ul>
                </div>
                <div class="sbox2">
                    <h2>Integer gravida</h2>
                    <ul class="style2">
                        <li><a href="#">Semper quis egetmi dolore</a></li>
                        <li><a href="#">Quam turpis feugiat dolor</a></li>
                        <li><a href="#">Consequat lorem phasellus</a></li>
                        <li><a href="#">Amet turpis feugiat amet</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
