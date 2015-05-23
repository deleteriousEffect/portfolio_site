/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio').
        controller('technologiesController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/technologies')
            .success(function(data) {
                console.log(data);
                vm.technologies = data.technologies;
                return vm;
            });
        }]);
}());
