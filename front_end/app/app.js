/*global angular, $ */

(function () {
    'use strict';
    angular.module('portfolio', [
        'headerDirective',
        'footerDirective',
        'cardDirective',
        'navbarDirective',
        'ngRoute'
    ]);
}());


/*global angular, $ */
(function () {
    'use strict';
    angular.module('portfolio').
        config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
            when('/projects', {
            templateUrl: 'app/shared/cards/projects/cardView.html',
            controller: 'projectsController',
            controllerAs: 'projectsArray'
        }).
            when('/technologies', {
            templateUrl: 'app/shared/cards/technologies/cardView.html',
            controller: 'technologiesController',
            controllerAs: 'technologiesArray'
        }).
            when('/jobs', {
            templateUrl: 'app/shared/cards/jobs/cardView.html',
            controller: 'jobsController',
            controllerAs: 'jobsArray'
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


/*global angular*/
(function () {
    'use strict';
    angular.module('footerDirective', []).
        directive('portfolioFooter', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/footer/footerView.html'
            };
        });
}());

/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio').
        controller('headerController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/headers/1')
            .success(function(data) {
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
    angular.module('headerDirective', []).
        directive('portfolioHeader', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/header/headerView.html',
                controller: 'headerController',
                controllerAs: 'header'
            };
        });
}());

/*global angular*/
(function () {
    'use strict';
    angular.module('navbarDirective', []).
        directive('portfolioNavbar', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/navbar/navbarView.html'
            };
        });
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

/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio').
        controller('jobsController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/jobs')
            .success(function(data) {
                console.log(data.jobs[0].title);
                vm.jobs = data.jobs;
                console.log(vm.jobs);
                return vm;
            });
        }]);
}());

/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio').
        controller('projectsController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/projects')
            .success(function(data) {
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
    angular.module('portfolio').
        controller('schoolsController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/schools')
            .success(function(data) {
                console.log(data);
                vm.schools = data.schools;
                return vm;
            });
        }]);
}());

/*global angular, $*/
(function () {
    'use strict';
    angular.module('portfolio').
        controller('technologiesController', ['$http', function ($http) {
            var vm = this;
            $http.get('http://api.hayswim.com/technologies')
            .success(function(data) {
                console.log(data);
                vm.technologies = data.technologies;
                return vm;
            });
        }]);
}());
