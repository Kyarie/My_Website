var myApp = angular.module('myApp', ['ui.router']);

myApp.run(function () {

});

myApp.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
            .state("homePage", {
                url: "/homePage",
                templateUrl: "../../Home/HomePage.html"
                //controller: "homePageController",
                //controllerAs: "homePageController",
                //data: {
                //    displayName: 'Home'
                //}
            })
}]);

myApp.controller('myAppController', ['$state', '$scope', function ($state, $scope) {
    var ctrl = this;

    $scope.toHome = function () {
        $state.go('homePage');
    };

    $scope.testing = 'whatever';
}]);

//(function () {
//    var myApp = angular.module('myApp', ['myApp.directive']);

//    myApp.controller('myAppController', ['$state', '$scope', function ($state, $scope) {
//        var ctrl = this;

//        $scope.toHome = function () {
//            $state.go('homePage');
//        };

//        $scope.testing = 'whatever';
//    }]);
//})();