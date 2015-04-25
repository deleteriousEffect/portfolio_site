/*global angular*/
angular.module('cardDirective', []).
    directive('card', function () {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: 'app/shared/cards/cardView.html'
        };
    });
