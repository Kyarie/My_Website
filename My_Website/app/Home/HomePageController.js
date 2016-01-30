var app = angular.module('app', []);

app.directive('dynamic', function ($compile) {
    return {
        restrict: 'A',
        replace: true,
        link: function (scope, ele, attrs) {
            ele.html(scope.html);
            $compile(ele.contents())(scope);
        }
    };
});

function MyController($scope) {
    $scope.click = function (arg) {
        alert('Clicked ' + $scope.name);
    }
    $scope.name = 'whatever';
    $scope.html = '<a ng-click="click(1)" href="#">Click me</a><label>{{name}}</label><br /> <input type="text" ng-model="name"></input>';
}