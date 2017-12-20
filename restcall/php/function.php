<?php 
function learningWordPress_resourses(){
	wp_enqueue_style('style',get_stylsheet_url());
	wp_enqueue_script('main_js','js/main.js',NULL,1.0,true);
	}
	add_action('wp_enqueue_scripts','learningWordPress_resourses');
