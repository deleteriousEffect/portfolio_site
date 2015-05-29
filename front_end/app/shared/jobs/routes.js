/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.jobs')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/jobs', {
                    templateUrl: 'app/shared/jobs/templates/jobs.html',
                    controller: 'jobsController',
                    controllerAs: 'jobsArray'
                });
        }]);
}());

