/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio').
        config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
            when('/projects', {
            templateUrl: 'app/shared/cards/cardView.html'
        }).
            when('/technologies', {
            templateUrl: 'app/shared/cards/cardView.html'
        }).
            when('/jobs', {
            templateUrl: 'app/shared/cards/cardView.html'
        }).
            when('/schools', {
            templateUrl: 'app/shared/cards/cardView.html'
        }).
            when('/', {
            templateUrl: 'app/shared/cards/cardView.html'
        }).
            otherwise({
            redirectTo: '/'
        });
    });
}());

