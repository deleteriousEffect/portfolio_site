/*global angular*/
(function () {
    'use strict';
    angular.module('portfolio.header.directive', []).
        directive('portfolioHeader', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/header/templates/header.html',
                controller: 'headerController',
                controllerAs: 'header'
            };
        });
}());
