<?php
/*
Functions
*/
if ( function_exists('register_sidebar') )
register_sidebar(array('name'=>'sidebar1',
'before_widget' => '<div class="box">',
'after_widget' => '</div></div>',
'before_title' => '<div class="box_title">',
'after_title' => '</div><div class="box_content">',

));

if (function_exists('add_theme_support'))
	add_theme_support('menus');