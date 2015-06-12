/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.schools')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/schools', {
                    navbarName: 'Education',
                    priority: 3,
                    templateUrl: 'app/shared/schools/templates/schools.html',
                    controller: 'schoolsController',
                    controllerAs: 'schoolsArray'
                });
        }]);
}());
