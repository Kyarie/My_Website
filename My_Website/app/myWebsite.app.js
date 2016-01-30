(function () {
    'use strict';

    var app = angular.module('myWebsite.app', [
        // Angular modules 
        'ngAnimate',        // animations
     //  'ngRoute',          // routing
        'ui.router',
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)
         'ngResource',
         'ngLocalize',
          'ngLocale',
     //   //// Custom modules 
       'common',           // common functions, logger, spinner
     //   //'common.bootstrap', // bootstrap dialog wrapper functions

     //   // 3rd Party Modules
        'ui.bootstrap',     // ui-bootstrap (ex: carousel, pagination, dialog)
     //   //'ngGrid',
        'angularFileUpload',
        'smart-table',
      //  'textAngular',
        'angularUtils.directives.uiBreadcrumbs',
        'notificationWidget',
        'ngCookies',
        'ui.mask'
      
    ]);

    

    // Handle routing errors and success events
    app.run([ function () {
        // Include $route to kick start the router.
    }]);
})();