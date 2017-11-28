/**
 *
 * Author Kent.Wang
 * Date 2017/11/27
 */
var app = angular.module('myApp', []);

app.controller('myController', function ($scope, $timeout) {
    var updateClock = function () {
        $scope.clock = new Date();
        $timeout(function () {
            updateClock();
        }, 1000);
    };
    updateClock();
});