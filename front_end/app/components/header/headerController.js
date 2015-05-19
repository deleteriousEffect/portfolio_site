/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio').
        controller('headerController', ['$scope', '$http', function ($scope, $http) {
            $http.get('http://api.hayswim.com/headers/1')
            .success(function(data) {
                console.log(data);
                var headerData = data.headers[0].header;
                $scope.title = headerData.title;
                $scope.subtitle = headerData.subtitle;
                $scope.iconUrl = headerData['profile picture'].src;
                $scope.altText = headerData['profile picture'].alt;
            });
        }]);
}());
