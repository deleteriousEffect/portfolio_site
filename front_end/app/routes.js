/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio').
        config(function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/', {
                    templateUrl: 'app/shared/projects/templates/projects.html',
                    controller: 'projectsController',
                    controllerAs: 'projectsArray'
                })
                    .otherwise({
                    redirectTo: '/'
                });
        });
}());

