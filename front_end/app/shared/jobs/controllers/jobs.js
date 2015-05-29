/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.jobs.controller', []).
        controller('jobsController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/jobs')
                .success(function (data) {
                    vm.jobs = data.jobs;
                    return vm;
                });
        }]);
}());
