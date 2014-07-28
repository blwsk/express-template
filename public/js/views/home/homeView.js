//  homeView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home.html'
], function($, _, Backbone, homeTemplate) {
  
  var HomeView = Backbone.View.extend({
    
    el: $('#main'),

    events: {},

    render: function() {
      this.$el.html(homeTemplate);
    }

  });

  return HomeView;

});