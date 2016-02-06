angular.module('myApp.directive', []);

angular.module('myApp', ['myApp.directive'])
    .run(function () {

    })
    .config(function ($stateProvider) {
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
        .state("resume", {
            url: "/resume",
            templateUrl: "app/Resume/resume.htm",
            //controller: "homePageController",
            //controllerAs: "homePageController",
            //data: {
            //    displayName: 'Home'
            //}
        })
    });