/**
 *
 * Author Kent.Wang
 * Date 2017/11/28
 */
var app = angular.module('myApp', []);

app.controller('filter1', function ($scope, $filter) {

    var name = 'Archar';
    $scope.name = $filter('lowercase')(name);
    $scope.name2 = $filter('uppercase')(name);

    var amount = 10000;
    $scope.amount = $filter('currency')(amount, '', 3);

    $scope.isCapitalized = function (str) {
        return str[0] == str[0].toUpperCase();
    };

    var info = {name: 'Emili', age: 17};
    $scope.info = info;
    $scope.jsonStr = $filter('json')(info);

})