requirejs.config({
	waitSeconds: 0,
	map: {
		'*': {
			'jquery': 'private/jquery',
			'underscore': 'private/underscore',
			'backbone': 'private/backbone',
			'marionette': 'private/marionette'
		},
		'private/jquery': {
			'jquery': 'jquery'
		},
		'private/underscore': {
			'underscore': 'underscore'
		},
		'private/backbone': {
			'backbone': 'backbone'
		},
		'private/marionette': {
			'marionette': 'marionette'
		}
	}
});

define(function(require) {
	var _ = require('underscore');
	var Backbone = require('backbone');
	var Marionette = require('marionette');

	// see https://github.com/marionettejs/marionette.inspector/blob/master/README.md#caveats
	if (window.__agent) {
		window.__agent.start(Backbone, Marionette);
	}

	var RootView = require('root');

	var app = new Marionette.Application();
	var rootView = new RootView();

	var exampleModel = new Backbone.Model({
		example: 'Example content'
	});

	var exampleView = new Marionette.ItemView({
		template: _.template('<%= example %>'),
		model: exampleModel
	});

	rootView.showChildView('example', exampleView);

	app.start();

});