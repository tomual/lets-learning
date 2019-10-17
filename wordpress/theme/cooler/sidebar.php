<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cooler
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>
<aside class="col-md-4 blog-sidebar">
	<div class="p-4 mb-3 bg-light rounded">
		<h4 class="font-italic">Latest Release</h4>
		<p class="mb-0"><b>Game Name</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="">Play Now</a></p>
	</div>

	<div class="p-4">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
	</div>
</aside>
<aside id="secondary" class="widget-area">
</aside><!-- #secondary -->