/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.navbar.controller', []).
        controller('navbarController', ['$route', function ($route) {
            var vm = this;
            vm.routes = $route.routes;
            for (var route in vm.routes) {
                console.log(route);
            }
        }]);
}());
