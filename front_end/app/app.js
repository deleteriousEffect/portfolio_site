/*global angular, $ */

(function () {
    'use strict';
    angular.module('portfolio', [
        'portfolio.header',
        'portfolio.footer',
        'portfolio.navbar',
        'portfolio.jobs',
        'portfolio.projects',
        'portfolio.schools',
        'portfolio.technologies',
        'ngRoute'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio').
        config(function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/', {
                    navbarName: 'Projects',
                    templateUrl: 'app/shared/projects/templates/projects.html',
                    controller: 'projectsController',
                    controllerAs: 'projectsArray'
                })
                    .otherwise({
                    redirectTo: '/'
                });
        });
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.footer', [
        'portfolio.footer.directive'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.header', [
        'portfolio.header.directive',
        'portfolio.header.controller'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.navbar', [
        'portfolio.navbar.directive',
        'portfolio.navbar.controller'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.jobs', [
        'portfolio.jobs.controller',
        'ngRoute'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.jobs')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/jobs', {
                    navbarName: 'Work',
                    priority: 7,
                    templateUrl: 'app/shared/jobs/templates/jobs.html',
                    controller: 'jobsController',
                    controllerAs: 'jobsArray'
                });
        }]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.projects', [
        'portfolio.projects.controller',
        'ngRoute'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.projects')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                .when('/projects', {
                    navbarName: 'Projects',
                    priority: 0,
                    templateUrl: 'app/shared/projects/templates/projects.html',
                    controller: 'projectsController',
                    controllerAs: 'projectsArray',
                    resolve: {
                        projectsData: function (portfolioService) {
                            return portfolioService.getPortfolioData('projects');
                        }
                    }
                });
        }]);
}());

/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.schools', [
        'portfolio.schools.controller',
        'ngRoute'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.schools')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/schools', {
                    navbarName: 'Education',
                    priority: 3,
                    templateUrl: 'app/shared/schools/templates/schools.html',
                    controller: 'schoolsController',
                    controllerAs: 'schoolsArray'
                });
        }]);
}());

/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.service', [])
        .service('portfolioService', ['$http', '$q', function ($http, $q) {
            var API_ENDPOINT = 'http://api.hayswim.com';

            function getPortfolioData(section) {
                var deferred = $q.defer();

                $http.get(API_ENDPOINT + '/' + section)
                    .success(function (data) {
                        var currentData;

                        currentData = {
                            projects: data.projects
                        };

                        deferred.resolve(currentData);
                    })
                    .error(function () {

                        deferred.resolve({
                            errorMessage: "Connection lost, please reload page or return later."
                        });
                    });
                return deferred.promise;
            }
            return {
                getPortfolioData: getPortfolioData
            };

        }]);
}());

/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.technologies', [
        'portfolio.technologies.controller',
        'ngRoute'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio.technologies')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/technologies', {
                    navbarName: 'Technologies',
                    priority: 1,
                    templateUrl: 'app/shared/technologies/templates/technologies.html',
                    controller: 'technologiesController',
                    controllerAs: 'technologiesArray',
                });
        }]);
}());

/*global angular*/
(function () {
    'use strict';
    angular.module('portfolio.footer.directive', []).
        directive('portfolioFooter', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/footer/templates/footer.html'
            };
        });
}());

/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.header.controller', []).
        controller('headerController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/headers/1')
                .success(function (data) {
                    console.log(data);
                    var headerData = data.headers[0].header;
                    vm.title = headerData.title;
                    vm.subtitle = headerData.subtitle;
                    vm.iconUrl = headerData['profile picture'].src;
                    vm.altText = headerData['profile picture'].alt;
                });
        }]);
}());

/*global angular*/
(function () {
    'use strict';
    angular.module('portfolio.header.directive', []).
        directive('portfolioHeader', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/header/templates/header.html',
                controller: 'headerController',
                controllerAs: 'header'
            };
        });
}());

/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.navbar.controller', []).
        controller('navbarController', ['$route', '$scope', function ($route, $scope) {
            var vm = this,
                routeObject = {},
                routesArray = [];
            for (routeObject in $route.routes) {
                if ($route.routes.hasOwnProperty(routeObject)) {
                    if ($route.routes[routeObject].navbarName &&
                            $route.routes[routeObject].originalPath !== '/') {
                        routesArray.push($route.routes[routeObject]);
                    }
                }
            }
            console.log(routesArray);
            vm.routes = routesArray;
            $scope.$route = $route;
            console.log($scope.$route);
        }]);
}());

/*global angular*/
(function () {
    'use strict';
    angular.module('portfolio.navbar.directive', []).
        directive('portfolioNavbar', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/navbar/templates/navbar.html',
                controller: 'navbarController',
                controllerAs: 'routesArray'
            };
        });
}());

/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.jobs.controller', []).
        controller('jobsController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/jobs')
                .success(function (data) {
                    vm.jobs = data.jobs;
                    return vm;
                });
        }]);
}());

/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.projects.controller', [
        'portfolio.service'
    ])
        .controller('projectsController', function (projectsData) {
            var vm = this;
            vm.projects = projectsData.projects;
        });
}());

/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.schools.controller', []).
        controller('schoolsController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/schools')
                .success(function (data) {
                    console.log(data);
                    vm.schools = data.schools;
                    return vm;
                });
        }]);
}());

/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio.technologies.controller', []).
        controller('technologiesController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/technologies')
                .success(function (data) {
                    console.log(data);
                    vm.technologies = data.technologies;
                    return vm;
                });
        }]);
}());
