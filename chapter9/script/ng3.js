/**
 *
 * Author Kent.Wang
 * Date 2017/11/29
 */
angular.module('myApp', [])
    .controller('NgController', function ($scope) {
// 最佳实践，永远使用一个模式

        $scope.people = [
            {name: "Ari", city: "San Francisco"},
            {name: "Erik", city: "Seattle"}
        ];

    })
    .controller('LotteryController', function ($scope) {
        $scope.generateNumber = function () {
            return Math.floor((Math.random() * 10) + 1);
        };
    });