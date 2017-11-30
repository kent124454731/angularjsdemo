/**
 *
 * Author Kent.Wang
 * Date 2017/11/29
 */
var app = angular.module('myApp', []);

app.controller('s1', function ($scope, $timeout) {
    $scope.textEnable = false;

    $timeout(function () {
        $scope.myHref = 'http://google.com';
    }, 2000);

    $timeout(function() {
        $scope.imgSrc = 'https://www.google.com/images/srpr/logo11w.png';
    }, 2000);
})