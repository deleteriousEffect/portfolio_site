/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio').
        controller('jobsController', ['$scope', '$http', function ($scope, $http) {
            $http.get('http://api.hayswim.com/jobs')
            .success(function(data) {
                console.log(data);
                $scope.jobs = data.jobs;
            });
        }]);
}());
