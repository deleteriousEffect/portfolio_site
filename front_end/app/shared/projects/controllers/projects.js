/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.projects.controller', [
        'portfolio.service'
    ])
        .controller('projectsController', function (projectsData) {
            var vm = this;
            vm.projects = projectsData.projects;
            vm.error = projectsData.errorMessage;
            console.log(projectsData.errorMessage);
        });
}());
