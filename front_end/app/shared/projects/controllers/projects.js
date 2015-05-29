/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.projects.controller', [])
        .controller('projectsController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/projects')
                .success(function (data) {
                    console.log(data.projects[0].title);
                    vm.projects = data.projects;
                    console.log(vm.projects);
                    return vm;
                });
        }]);
}());
