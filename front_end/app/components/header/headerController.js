/*global angular, $*/
(function () {
    'use strict';
    angular.module('headerController', ['Header', '$scope']).
        controller('headerApiController', function ($scope, Header) {
            $scope.headerData = function () {
                return new Header();
            };
        });
}());
