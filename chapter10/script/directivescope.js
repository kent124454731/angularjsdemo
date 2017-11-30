/**
 *
 * Author Kent.Wang
 * Date 2017/11/30
 */
angular.module('myApp', [])
    .directive('myDirective', function () {
        return {
            restrict: 'A',
            template: 'Inside myDirective, isolate scope: {{ myProperty }}',
            scope: {}
        };
    })
    .directive('myInheritScopeDirective', function () {
        return {
            restrict: 'A',
            template: 'Inside myInheritScopeDirective, isolate scope: {{ myProperty }}',
            scope: true,
            link: function (scope, elem, attrs, _ngmodel) {
                var a  = scope.myProperty;

            }
        };
    });