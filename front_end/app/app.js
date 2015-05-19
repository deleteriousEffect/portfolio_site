/*global angular, $ */

(function () {
    'use strict';
    angular.module('portfolio', [
        'headerDirective',
        'footerDirective',
        'cardDirective',
        'navbarDirective'
    ]);
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
            $http.get('http://api.hayswim.com/a-test')
            .success(function(data) {
                console.log(data);
                var headerData = data.nodes[0].node;
                $scope.title = headerData.title;
                $scope.subtitle = headerData.subtitle;
                $scope.iconUrl = 'test';
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
    angular.module('headerService', []).
        factory('Header', ['$http', function HeaderFactory($http) {
            var api = 'http://hayswim.com/dummy_json/',
                headerData = 'header.json';
            return function () {
                return $http.get(api + headerData);
            };
        }]);
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
