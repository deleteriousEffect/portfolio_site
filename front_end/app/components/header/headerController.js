/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio').
        controller('headerController', ['$scope', '$http', function ($scope, $http) {
            $http.get('http://api.hayswim.com/a-test')
            .success(function(data) {
                console.log(data);
                var headerData = data.nodes[0].node;
                $scope.title = headerData.title;
                $scope.subtitle = headerData.subtitle;
                $scope.iconUrl = 'test';
            });
        }]);
}());
