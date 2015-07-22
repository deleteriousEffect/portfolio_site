/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.jobs.controller', [
        'portfolio.service'
    ])
        .controller('jobsController', function (jobsData) {
            var vm = this;
            vm.jobs = jobsData.jobs;
            console.log(vm.jobs[0].responsibility.split('\\'));
            vm.errorMessage = jobsData.errorMessage;
            vm.startDateSort = function (job) {
                return new Date(job.start_date);
            };
        });
}());
