/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio').
        controller('projectsController', ['$scope', '$http', function ($scope, $http) {
            $http.get('http://api.hayswim.com/projects')
            .success(function(data) {
                console.log(data.projects[0].project.title);
                $scope.cards = data.projects;
            });
        }]);
}());
