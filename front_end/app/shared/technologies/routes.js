/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.technologies')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/technologies', {
                    navbarName: 'Technologies',
                    priority: 1,
                    templateUrl: 'app/shared/technologies/templates/technologies.html',
                    controller: 'technologiesController',
                    controllerAs: 'technologiesArray',
                    resolve: {
                        technologiesData: function (portfolioService) {
                            return portfolioService.getPortfolioData('technologies');
                        }
                    }
                });
        }]);
}());
