/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio').
        controller('schoolsController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/schools')
            .success(function(data) {
                console.log(data);
                vm.schools = data.schools;
                return vm;
            });
        }]);
}());
