angular.module('myApp.directive', []);

angular.module('myApp', ['myApp.directive'])
    .run(function () {
        
    })
    .config(function($stateProvider) {
        $stateProvider
            .state("homePage", {
                   url: "/",
                   templateUrl: "app/Home/HomePage.html",
                   controller: "homePageController",
                   controllerAs: "homePageController",
                   data: {
                       displayName: 'Home'
                   }
            })
    });