/*global angular*/
angular.module('footerDirective', []).
    directive('portfolioFooter', function () {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: 'app/components/footer/footerView.html'
        };
    });
