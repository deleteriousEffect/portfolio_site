/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio').
        controller('technologiesController', ['$scope', '$http', function ($scope, $http) {
            $http.get('http://api.hayswim.com/technologies')
            .success(function(data) {
                console.log(data);
                $scope.technologies = data.technologies;
            });
        }]);
}());
