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
    angular.module('headerController', ['Header', '$scope']).
        controller('headerApiController', function ($scope, Header) {
            $scope.headerData = function () {
                return new Header();
            };
        });
}());

/*global angular*/
(function () {
    'use strict';
    angular.module('headerDirective', []).
        directive('portfolioHeader', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/components/header/headerView.html'
            };
        });
}());

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
