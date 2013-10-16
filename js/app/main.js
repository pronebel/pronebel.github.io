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
		jquery: 'js/lib/jquery',
		underscore: 'js/lib/underscore',
		backbone: 'js/lib/backbone/backbone',
		backboneLocalstorage: 'js/lib/backbone/backbone.localStorage',
		text: 'js/lib/require/text'
	}
});

require([
	'views/app',
	'routers/router'
], function( AppView, Workspace ) {
	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start();

	// Initialize the application view
	new AppView();
});
