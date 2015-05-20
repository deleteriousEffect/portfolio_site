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
            templateUrl: 'app/shared/cards/cardView.html'
        }).
            when('/technologies', {
            templateUrl: 'app/shared/cards/cardView.html'
        }).
            when('/jobs', {
            templateUrl: 'app/shared/cards/cardView.html'
        }).
            when('/schools', {
            templateUrl: 'app/shared/cards/cardView.html'
        }).
            when('/', {
            templateUrl: 'app/shared/cards/cardView.html'
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
        controller('headerController', ['$scope', '$http', function ($scope, $http) {
            $http.get('http://api.hayswim.com/headers/1')
            .success(function(data) {
                console.log(data);
                var headerData = data.headers[0].header;
                $scope.title = headerData.title;
                $scope.subtitle = headerData.subtitle;
                $scope.iconUrl = headerData['profile picture'].src;
                $scope.altText = headerData['profile picture'].alt;
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
                scope: {}
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
