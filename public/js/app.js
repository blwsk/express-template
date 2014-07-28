//  app.js
define([
  'jquery', 
  'underscore', 
  'backbone', 
  'router'
], function($, _, Backbone, Router) {

  //
  //  start the app by initializing the router
  //

  var initialize = function() {
    //  call router's initialize function
    Router.initialize();
  }

  return {
    initialize: initialize
  }

});