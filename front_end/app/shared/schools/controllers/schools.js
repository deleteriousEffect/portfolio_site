/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.schools.controller', [
        'portfolio.service'
    ]).
        controller('schoolsController', function (schoolsData) {
            var vm = this;
            vm.schools = schoolsData.schools;
            vm.errorMessage = schoolsData.errorMessage;

            // Sort dates numerically.
            vm.startDateSort = function (school) {
                return new Date(school.start_date);
            };
        });
}());
