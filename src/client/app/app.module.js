(function() {
  'use strict';

  angular.module('app', [
    'app.core',
    'app.widgets',
    
    //3d party modules
    'ui.bootstrap',

    //app modules
    'app.admin',
    'app.dashboard',
    'app.layout',
    'app.patients',
    'app.tests'
  ]);

})();
