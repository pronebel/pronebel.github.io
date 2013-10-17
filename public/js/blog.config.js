// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store'
		}
	},
	paths: {
		jquery: 'lib/jquery',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone/backbone',
		backboneLocalstorage: 'lib/backbone/backbone.localStorage',
		text: 'lib/require/text'
	}
});

require([
	'blog/views/app','blog/views/detail',
	'blog/routers/router',"text!blog/templates/banner.html","text!blog/templates/header.html"
], function( AppView, DetailView,Routers,bannerTemplate,headerTemplate ) {

    for(var router in Routers){
        new Routers[router];
    }

	Backbone.history.start();
    $("#J_banner").html(bannerTemplate);
    $("#J_header").html(headerTemplate);

    if(window.location.href.indexOf("detail.html")>-1){
        (new DetailView()).render(location.search.replace("?",""));
    }else{
        (new AppView()).render();
    }
});
