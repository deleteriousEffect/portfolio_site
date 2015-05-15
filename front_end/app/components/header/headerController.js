/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio').
        controller('headerController', ['$scope', function ($scope) {
            $scope.title =  'hello, world';
            $scope.subtitle = 'test';
            $scope.iconUrl = 'test';
        }]);
}());
