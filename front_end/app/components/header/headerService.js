/*global angular*/
(function () {
    'use strict';
    angular.module('headerService', []).
        factory('Header', ['$http', function HeaderFactory($http) {
            var api = 'http://hayswim.com/dummy_json/',
                headerData = 'header.json';
            return function () {
                return $http.get(api + headerData);
            };
        }]);
}());

