/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.jobs')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/schools', {
                    templateUrl: 'app/shared/schools/templates/schools.html',
                    controller: 'schoolsController',
                    controllerAs: 'schoolsArray'
                });
        }]);
}());
