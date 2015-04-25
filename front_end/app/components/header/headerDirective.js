/*global angular*/
angular.module('headerDirective', []).
    directive('portfolioHeader', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/components/header/headerView.html'
        };
    });
