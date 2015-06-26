/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.header.controller', []).
        controller('headerController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/headers/1')
                .success(function (data) {
                    var headerData = data.headers[0].header;
                    vm.title = headerData.title;
                    vm.subtitle = headerData.subtitle;
                    vm.iconUrl = headerData['profile picture'].src;
                    vm.altText = headerData['profile picture'].alt;
                });
        }]);
}());
