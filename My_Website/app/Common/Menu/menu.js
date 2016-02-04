var myApp = angular.module('myApp', ['ui.router']);

myApp.run(['$state', function ($state) {
    $state.go("homePage");
}]);

myApp.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
            .state("homePage", {
                url: "/",
                templateUrl: "../../Home/HomePage.html"
                //controller: "homePageController",
                //controllerAs: "homePageController",
                //data: {
                //    displayName: 'Home'
                //}
            })
}]);

myApp.controller('myAppController', ['$state', '$scope', '$window', function ($state, $scope, $window) {
    var ctrl = this;
    if ($window.innerHeight < $window.innerWidth) {
        var headerHeight = document.getElementById('headerImage').clientWidth / 2;
    }
    else {
        var headerHeight = document.getElementById('headerImage').clientWidth;
    }
    
    $scope.headerStyle = { height: headerHeight + 'px' }

    $(window).on("resize.doResize", function () {
        if ($window.innerHeight < $window.innerWidth) {
            headerHeight = document.getElementById('headerImage').clientWidth / 2;
        }
        else {
            headerHeight = document.getElementById('headerImage').clientWidth;
        }
        $scope.headerStyle = { height: headerHeight + 'px' }
        $scope.$apply(function () {
            //do something to update current scope based on the new innerWidth and let angular update the view.
        });
    });

    $scope.$on("$destroy", function () {
        $(window).off("resize.doResize"); //remove the handler added earlier
    });     
    
    $scope.toHome = function () {
        $state.go('homePage');
    };

    $scope.testing = 'whatever';
}]);