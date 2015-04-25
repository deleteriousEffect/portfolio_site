/*global angular*/
angular.module('footerDirective', []).
    directive('portfolioFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/components/footer/footerView.html'
        };
    });
