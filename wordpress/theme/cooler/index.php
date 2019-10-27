<?php

/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package cooler
 */

get_header();
?>
<div class="container">

	<div class="jumbotron p-4 p-md-5 text-white rounded bg-dark" style="background-image: url(<?php echo get_template_directory_uri() ?>/img/banner.png)">
		<div class="col-md-6 px-0">
			<h1 class="display-4 font-italic">Some cool intro for yourself here</h1>
			<p class="lead my-3">A little description on yourself for the visitors to see. Ideally at least two sentences.</p>
			<p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Read more ...</a></p>
		</div>
	</div>

	<div class="row mb-2 cards">
		<div class="col-md-6">
			<div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
				<div class="col p-4 d-flex flex-column position-static">
					<h3>Games</h3>
					<p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
					<a href="<?php echo site_url('games') ?>" class="stretched-link">Go to Games &raquo;</a>
				</div>
				<div class="card-games col-auto d-none d-lg-block" width="200" height="250" style="background-image: url(<?php echo get_template_directory_uri() ?>/img/games.png)">
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
				<div class="col p-4 d-flex flex-column position-static">
					<h3>Music</h3>
					<p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
					<a href="<?php echo site_url('music') ?>" class="stretched-link">Go to Music &raquo;</a>
				</div>
				<div class="card-music col-auto d-none d-lg-block" width="200" height="250" style="background-image: url(<?php echo get_template_directory_uri() ?>/img/music.png)">
				</div>
			</div>
		</div>
	</div>
</div>
<main role="main" class="container">
	<div class="row">
		<div class="col-md-8 blog-main">
			<h3 class="pb-4 mb-4 font-italic border-bottom text-muted">
				Blog
			</h3>

			<?php
		if (have_posts()) :

			if (is_home() && !is_front_page()) :
				?>
				<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>
		<?php
			endif;

			/* Start the Loop */
			while (have_posts()) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				get_template_part('template-parts/content', get_post_type());

			endwhile;

			the_posts_navigation();

		else :

			get_template_part('template-parts/content', 'none');

		endif;
		?>

		</div>
		<?php get_sidebar() ?>
		
	</div>
</main>

<?php
get_footer();
