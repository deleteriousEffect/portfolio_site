/*global angular*/
angular.module('headerDirective', []).
    directive('portfolioHeader', function () {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: 'app/components/header/headerView.html'
        };
    });
