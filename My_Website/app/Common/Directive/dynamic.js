var app = angular.module('webapp', []);

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