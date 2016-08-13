var myApp = angular.module('myApp', ['ui.router']);

myApp.run(['$state', function ($state) {
    $state.go("homePage");
}]);

myApp.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
            .state("homePage", {
                url: "/",
                templateUrl: "app/Home/HomePage.html"
                //controller: "homePageController",
                //controllerAs: "homePageController",
                //data: {
                //    displayName: 'Home'
                //}
            })
        .state("resume", {
            url: "/resume",
            templateUrl: "app/Resume/resume.html"
            //controller: "homePageController",
            //controllerAs: "homePageController",
            //data: {
            //    displayName: 'Home'
            //}
        })
    .state("myStory", {
        url: "/myStory",
        templateUrl: "app/MyStory/myStory.html"
        //controller: "homePageController",
        //controllerAs: "homePageController",
        //data: {
        //    displayName: 'Home'
        //}
    })
    .state("research", {
        url: "/Research",
        templateUrl: "app/Research/research.html",
        //controller: "homePageController",
        //controllerAs: "homePageController",
        //data: {
        //    displayName: 'Home'
        //}
    })
    .state("placeholder", {
        url: "/UpdatingSoon",
        templateUrl: "app/Common/placeholder.html",
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

    var footerHeight = document.getElementById('stickyFooter').clientHeight > 100 ? 160 : 100;

    $scope.headerStyle = { height: headerHeight + 'px' }
    $scope.bodyMarginStyle = { 'margin-bottom': footerHeight + 'px' }
    $scope.footerStyle = { height: footerHeight + 'px' }

    $(window).on("resize.doResize", function () {
        if ($window.innerHeight < $window.innerWidth) {
            headerHeight = document.getElementById('headerImage').clientWidth / 2;
        }
        else {
            headerHeight = document.getElementById('headerImage').clientWidth;
        }
        $scope.headerStyle = { height: headerHeight + 'px' }
        footerHeight = document.getElementById('stickyFooter').clientHeight > 100 ? 160 : 100;
        $scope.bodyMarginStyle = { 'margin-bottom': footerHeight + 'px' }
        $scope.footerStyle = { height: footerHeight + 'px' }
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

    $scope.toResume = function () {
        $state.go('resume');
    };

    $scope.toStory = function () {
        $state.go('myStory');
    }

    $scope.toPlaceholder = function () {
        $state.go('placeholder');
    }

    $scope.toResearch = function () {
        $state.go('research');
    }

    $scope.testing = 'whatever';
}]);