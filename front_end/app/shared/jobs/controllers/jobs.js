/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.jobs.controller', [
        'portfolio.service'
    ])
        .controller('jobsController', function (jobsData) {
            var vm = this;
            vm.jobs = jobsData.jobs;
            vm.errorMessage = jobsData.errorMessage;
        });
}());
