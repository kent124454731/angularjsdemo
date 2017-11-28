/**
 * 插值字符串,基于作用域上的某个条件实时更新值
 * Author Kent.Wang
 * Date 2017/11/28
 */
//自定义插值标识符号
angular.module('emailParser', [])
    .config(['$interpolateProvider', function ($interpolateProvider) {
        $interpolateProvider.startSymbol('__');
        $interpolateProvider.endSymbol('__');
    }])
    .factory('EmailParser', ['$interpolate', function ($interpolate) {
// 处理解析的服务
        return {
            parse: function (text, context) {
                var template = $interpolate(text);
                return template(context);
            }
        };
    }]);

// angular.module('myApp', ['emailParser'])
//     .controller('MyController', ['$scope', 'EmailParser',
//         function ($scope, EmailParser) {
// // 设置监听
//             $scope.$watch('emailBody', function (body) {
//                 if (body) {
//                     $scope.previewText = EmailParser.parse(body, {
//                         to: $scope.to
//                     });
//                 }
//             });
//         }]);

angular.module('myApp', [])
    .controller('MyController',
        function ($scope, $interpolate) {

            $scope.$watch('emailBody', function (body) {
                if (body) {
                    var template = $interpolate(body);
                    $scope.previewText = template({
                        to: $scope.to,
                        from: $scope.from
                    });
                }
            });
        });