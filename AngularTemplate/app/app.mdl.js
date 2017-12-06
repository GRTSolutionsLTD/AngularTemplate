(function () {
    'use strict';
    angular.module('app.page1', []);
    angular.module('app.page2', []);
    angular.module('app.services', []);
    angular.module('app.filters', []);
    angular.module('app.directives', []);
    angular.module('app', [
        // Angular modules
        'ngAnimate',
        'ngRoute',

        // Custom modules
        'app.page1',
        'app.page2',
        // 3rd Party Modules
        'app.services',
        'app.filters',
        'app.directives'

    ])
    .run(['$rootScope', '$filter', function ($rootScope, $filter) {
         $rootScope.title = "גלרית תמונות";

       
         $rootScope.currentDate = $filter('date')(new Date(), "dd/MM/yyyy");
         $rootScope.currentDate = new Date();
     }]);
})();
