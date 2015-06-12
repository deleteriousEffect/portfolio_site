/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.projects')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                .when('/projects', {
                    navbarName: 'Projects',
                    priority: 0,
                    templateUrl: 'app/shared/projects/templates/projects.html',
                    controller: 'projectsController',
                    controllerAs: 'projectsArray'
                });
        }]);
}());
