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
        'cardDirective',
        'ngRoute'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio').
        config(function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider.
                    when('/technologies', {
                    templateUrl: 'app/shared/cards/technologies/cardView.html',
                    controller: 'technologiesController',
                    controllerAs: 'technologiesArray'
                }).
                    when('/schools', {
                    templateUrl: 'app/shared/cards/schools/cardView.html',
                    controller: 'schoolsController',
                    controllerAs: 'schoolsArray'
                }).
                    when('/', {
                    templateUrl: 'app/shared/cards/projects/cardView.html',
                    controller: 'projectsController',
                    controllerAs: 'projectsArray'
                }).
                    otherwise({
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
        'portfolio.navbar.directive'
    ]);
}());


/*global angular*/
(function () {
    'use strict';
    angular.module('cardDirective', []).
        directive('card', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/shared/cards/cardView.html'
            };
        });
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
                    templateUrl: 'app/shared/projects/templates/projects.html',
                    controller: 'projectsController',
                    controllerAs: 'projectsArray'
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
    angular.module('portfolio.jobs')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/schools', {
                    templateUrl: 'app/shared/schools/templates/schools.html',
                    controller: 'schoolsController',
                    controllerAs: 'schoolsArray'
                });
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
    angular.module('portfolio.jobs')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/technologies', {
                    templateUrl: 'app/shared/technologies/templates/technologies.html',
                    controller: 'technologiesController',
                    controllerAs: 'technologiesArray'
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

/*global angular*/
(function () {
    'use strict';
    angular.module('portfolio.navbar.directive', []).
        directive('portfolioNavbar', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/navbar/templates/navbar.html'
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
    angular.module('portfolio.projects.controller', [])
        .controller('projectsController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/projects')
                .success(function (data) {
                    console.log(data.projects[0].title);
                    vm.projects = data.projects;
                    console.log(vm.projects);
                    return vm;
                });
        }]);
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
