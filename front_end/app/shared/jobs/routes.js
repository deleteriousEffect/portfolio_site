/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.jobs')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/jobs', {
                    navbarName: 'Work',
                    priority: 7,
                    templateUrl: 'app/shared/jobs/templates/jobs.html',
                    controller: 'jobsController',
                    controllerAs: 'jobsArray',
                    resolve: {
                        jobsData: function (portfolioService) {
                            return portfolioService.getPortfolioData('jobs');
                        }
                    }
                });
        }]);
}());
