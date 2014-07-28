//  main.js
require.config({
  paths: {
    'jquery': 'lib/jquery.min',
    'underscore': 'lib/underscore.min',
    'backbone': 'lib/backbone.min',
    'text': 'lib/text.min',
    'templates': '../templates'
  }
});


//
//  initialize app
//

require(['app'], function(App) {
  App.initialize();
});
