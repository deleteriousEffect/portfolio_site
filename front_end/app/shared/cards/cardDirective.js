/*global angular*/
angular.module('cardDirective', []).
    directive('card', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/cards/cardView.html'
        };
    });
