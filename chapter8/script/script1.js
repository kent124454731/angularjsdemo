/**
 *
 * Author Kent.Wang
 * Date 2017/11/29
 */
var app = angular.module("myApp", []);

app.controller('MyController', function ($scope) {
    $scope.myUrl = "http://google.com";
    $scope.myLinkText = "Click me";
})

app.directive('aHref', function () {
    return {
        // restrict: 'EAC',
        template: '<a href="http://google.com">' +
        'Click me to go to Google </a>'
    };
});

app.directive('myDirective', function () {
    return {
        restrict: 'EAC',
        scope: {
            myUrl: '@',    //单向绑定  @ 外部赋值可直接用scope属性，需要符号{{}}
            linkText: '='  //双向绑定  = 外部赋值可直接用scope属性，不需要符号{{}}
        },
        template: '<input type="text" ng-model="linkText" /><a href="{{myUrl}}">' +
        '{{linkText}} </a>'
    };
});

app.directive('myDirective3', function () {
    return {
        restrict: 'EAC',
        scope: {
            myUrl: '@',    //单向绑定  @ 外部赋值可直接用scope属性，需要符号{{}}
            linkText: '@'  //双向绑定  = 外部赋值可直接用scope属性，不需要符号{{}}
        },
        template: ' <input type="text" ng-model="linkText" /> <a href="{{myUrl}}">' +
        '{{linkText}} </a>'
    };
});