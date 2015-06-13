/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.navbar.controller', []).
        controller('navbarController', ['$route', '$scope', function ($route, $scope) {
            var vm = this,
                routeObject = {},
                routesArray = [];
            for (routeObject in $route.routes) {
                if ($route.routes.hasOwnProperty(routeObject)) {
                    if ($route.routes[routeObject].navbarName &&
                            $route.routes[routeObject].originalPath !== '/') {
                        routesArray.push($route.routes[routeObject]);
                    }
                }
            }
            console.log(routesArray);
            vm.routes = routesArray;
            $scope.$route = $route;
            console.log($scope.$route);
        }]);
}());
