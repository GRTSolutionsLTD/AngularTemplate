(function () {
    'use strict';
    angular.module('app')
    .config(['$routeProvider', function config($routeProvider) {
        $routeProvider
               .when('/page1', {
                   controller: 'page1Ctrl',
                   controllerAs:'vm',
                   templateUrl: '/app/pages/page1/page1.tpl.html'
               })
            .when('/page2', {
                controller: 'page2Ctrl',
                templateUrl: '/app/pages/page2/page2.tpl.html',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/page1'
            });
    }]);
    
})();
