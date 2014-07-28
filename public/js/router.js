//  router.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'views/home/homeView'
], function($, _, Backbone, HomeView) {

  //
  //  map out some routes
  //
  var AppRouter = Backbone.Router.extend({
    routes: {
      //  default route
      '*path': 'defaultAction'
    }
  });

  //
  //  initialize router
  //
  var initialize = function() {

    var router = new AppRouter;

    //  home view
    router.on('route:defaultAction', function(actions) {
      var homeView = new HomeView();
      homeView.render();
    });

    //  history, pushState
    Backbone.history.start({pushState: true});
  }

  return {
    initialize: initialize
  }

});