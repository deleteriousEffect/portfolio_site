/*global angular*/
(function () {
    'use strict';
    angular.module('portfolio.navbar.directive', []).
        directive('portfolioNavbar', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/navbar/templates/navbar.html'
            };
        });
}());
