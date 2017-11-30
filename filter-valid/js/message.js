/**
 *
 * Author Kent.Wang
 * Date 2017/11/29
 */
var app = angular.module('myApp', ['ngMessages']);


app.controller('signupController', function ($scope, $timeout) {
    $scope.submitted = false;
    $scope.signupForm = function () {
        if ($scope.signup_form.$valid) {
// 正常提交
        } else {
            $scope.signup_form.submitted = true;
        }
        $scope.signup_form.$setValidity('checkingAvailability', true);
        $scope.signup_form.$setValidity('usernameAvailablity', true);

        $timeout(function () {
            $scope.signup_form.$setValidity('checkingAvailability', false);
            $scope.signup_form.$setValidity('usernameAvailablity', true);
        }, 2000)
    }


});
//
// app.directive('ensureUnique', function ($http) {
//     return {
//         require: 'ngModel',
//         link: function (scope, ele, attrs, ctrl) {
//             var url = attrs.ensureUnique;
//             ctrl.$parsers.push(function (val) {
//                 if (!val || val.length === 0) {
//                     return;
//                 }
//                 ngModel.$setValidity('checkingAvailability', true);
//                 ngModel.$setValidity('usernameAvailablity', false);
//                 $http({
//                     method: 'GET',
//                     url: url,
//                     params: {
//                         username: val
//                     }
//                 }).success(function () {
//                     ngModel
//                         .$setValidity('checkingAvailability', false);
//                     ngModel
//                         .$setValidity('usernameAvailablity', true);
//                 })['catch'](function () {
//                     ngModel
//                         .$setValidity('checkingAvailability', false);
//                     ngModel
//                         .$setValidity('usernameAvailablity', false);
//                 });
//                 return val;
//             })
//         }
//     }
// });