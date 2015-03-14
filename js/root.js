define(function(require) {

	var Marionette = require('marionette');

	var RootView = Marionette.LayoutView.extend({
		el: 'body',
		regions: {
			example: '#example'
		}
	});

	return RootView;

});