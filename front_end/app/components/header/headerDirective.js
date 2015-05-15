/*global angular*/
(function () {
    'use strict';
    angular.module('headerDirective', []).
        directive('portfolioHeader', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/header/headerView.html',
                controller: 'headerController',
                scope: {}
            };
        });
}());
