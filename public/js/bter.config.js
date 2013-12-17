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
	'bter/views/app','bter/routers/router',"text!bter/templates/header.html"
], function( AppView, DetailView,Routers,headerTemplate ) {

    for(var router in Routers){
        new Routers[router];
    }

	Backbone.history.start();

    $("#J_header").html(headerTemplate);


        (new AppView()).render();

});
