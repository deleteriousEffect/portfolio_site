/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio').
        config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
            when('/projects', {
            templateUrl: 'app/shared/cards/projects/cardView.html',
            controller: 'projectsController',
            controllerAs: 'projectsArray'
        }).
            when('/technologies', {
            templateUrl: 'app/shared/cards/technologies/cardView.html',
            controller: 'technologiesController',
            controllerAs: 'technologiesArray'
        }).
            when('/jobs', {
            templateUrl: 'app/shared/cards/jobs/cardView.html',
            controller: 'jobsController',
            controllerAs: 'jobsArray'
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

