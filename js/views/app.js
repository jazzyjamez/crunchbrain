define([
	"backbone",
	"state"
], function(Backbone, AppState) {
	var AppView = Backbone.View.extend({
		el: '#content',
		initialize: function() {
			this.views = AppState.get('views');
			this.listenTo(AppState, 'change:activeView', this.change);
		},

		change: function() {
      for (var view in this.views.attributes) {
        if (this.views.get(view) !== AppState.get('activeView')) {
          this.views.get(view).$el.fadeOut(300);
          } else {
          this.views.get(view).$el.fadeIn(300);
        }
      }
    }
	});

	return new AppView();
});