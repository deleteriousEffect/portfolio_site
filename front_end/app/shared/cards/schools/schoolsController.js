/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio').
        controller('schoolsController', ['$scope', '$http', function ($scope, $http) {
            $http.get('http://api.hayswim.com/schools')
            .success(function(data) {
                console.log(data);
                $scope.cards = data.schools;
            });
        }]);
}());
