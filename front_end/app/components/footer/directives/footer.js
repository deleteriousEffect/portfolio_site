/*global angular*/
(function () {
    'use strict';
    angular.module('portfolio.footer.directive', []).
        directive('portfolioFooter', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/footer/templates/footer.html'
            };
        });
}());
