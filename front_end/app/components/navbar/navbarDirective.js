/*global angular*/
angular.module('navbarDirective', []).
    directive('portfolioNavbar', function () {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbarView.html'
        };
    });
