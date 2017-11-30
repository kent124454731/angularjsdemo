/**
 *
 * Author Kent.Wang
 * Date 2017/11/30
 */
var app = angular.module('myApp', [])
    .controller('SomeController', function ($scope) {
// 可以留空，但需要被定义
    })
    .controller('SecondController', function ($scope) {
// 同样可以留空
    })

app.directive('myDirective', function () {
    return {
        restrict: 'A',
        scope: false,
        template: "Inside myDirective: {{ aThirdProperty }}"
    };
});