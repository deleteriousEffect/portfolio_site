/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio').
        config(function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider.
                    when('/technologies', {
                    templateUrl: 'app/shared/cards/technologies/cardView.html',
                    controller: 'technologiesController',
                    controllerAs: 'technologiesArray'
                }).
                    when('/schools', {
                    templateUrl: 'app/shared/cards/schools/cardView.html',
                    controller: 'schoolsController',
                    controllerAs: 'schoolsArray'
                }).
                    when('/', {
                    templateUrl: 'app/shared/cards/projects/cardView.html',
                    controller: 'projectsController',
                    controllerAs: 'projectsArray'
                }).
                    otherwise({
                    redirectTo: '/'
                });
        });
}());

