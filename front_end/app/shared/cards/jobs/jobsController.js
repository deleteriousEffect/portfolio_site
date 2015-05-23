/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio').
        controller('jobsController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/jobs')
            .success(function(data) {
                console.log(data.jobs[0].title);
                vm.jobs = data.jobs;
                console.log(vm.jobs);
                return vm;
            });
        }]);
}());
