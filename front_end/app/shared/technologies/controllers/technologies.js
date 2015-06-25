/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.technologies.controller', [
        'portfolio.service'
    ])
        .controller('technologiesController', function (technologiesData) {
            var vm = this;
            vm.technologies = technologiesData.technologies;
            vm.errorMessage = technologiesData.errorMessage;
        });
}());
