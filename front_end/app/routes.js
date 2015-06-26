/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio').
        config(function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/', {
                    navbarName: 'Projects',
                    templateUrl: 'app/shared/projects/templates/projects.html',
                    controller: 'projectsController',
                    controllerAs: 'projectsArray',
                    resolve: {
                        projectsData: function (portfolioService) {
                            return portfolioService.getPortfolioData('projects');
                        }
                    }

                })
                    .otherwise({
                    redirectTo: '/'
                });
        });
}());
