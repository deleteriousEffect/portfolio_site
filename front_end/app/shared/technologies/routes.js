/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.jobs')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/technologies', {
                    templateUrl: 'app/shared/technologies/templates/technologies.html',
                    controller: 'technologiesController',
                    controllerAs: 'technologiesArray'
                });
        }]);
}());
