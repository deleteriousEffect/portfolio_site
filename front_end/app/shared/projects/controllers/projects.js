/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.projects.controller', [
        'portfolio.projects.service'
    ])
        .controller('projectsController', function (projectsData) {
            var vm = this;
            vm.projects = projectsData.projects;
        });
}());
