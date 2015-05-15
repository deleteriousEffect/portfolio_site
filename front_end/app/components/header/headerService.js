/*global angular*/
(function () {
    'use strict';
    angular.module('headerService', []).
        factory('Header', function HeaderFactory() {
            var api = '../dummy_json/',
                headerData = 'header.json';
            return function () {
                return api + headerData;
            };
        });
}());

