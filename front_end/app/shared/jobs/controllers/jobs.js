/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.jobs.controller', [
        'portfolio.service'
    ])
        .controller('jobsController', function (jobsData) {
            var vm = this;
            vm.jobs = jobsData.jobs;
            vm.jobs.responcibility = vm.jobs.responcibility.split("\n");
            vm.errorMessage = jobsData.errorMessage;
            vm.startDateSort = function (job) {
                return new Date(job.start_date);
            };
        });
}());
