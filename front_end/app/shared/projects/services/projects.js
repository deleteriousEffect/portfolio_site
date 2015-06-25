/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.projects.service', [])
        .service('projectsService', ['$http', '$q', function ($http, $q) {
            var API_ENDPOINT = 'http://api.hayswim.com',
                PROJECTS_JSON = 'projects';

            function getProjectsData() {
                var deferred = $q.defer();

                $http.get(API_ENDPOINT + '/' + PROJECTS_JSON)
                    .success(function (projectsData) {
                        var currentProjectsData;

                        currentProjectsData = {
                            projects: projectsData.projects
                        };

                        deferred.resolve(currentProjectsData);
                    })
                    .error(function () {

                        deferred.resolve({
                            projects: []
                        });
                    });
                return deferred.promise;
            }
            return {
                getProjectsData: getProjectsData
            };

        }]);
}());
