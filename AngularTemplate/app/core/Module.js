(function () {
    'use strict';

    var app = angular.module('app.core', [
          // Angular modules 


         // 3rd Party Modules
        'toaster',
        'angularMoment',
    ])

    app.config(['$compileProvider', '$httpProvider', function ($compileProvider, $httpProvider) {
        //for performance issue
        //used for production: changing "true" to "false"
        $compileProvider.debugInfoEnabled(true);
        $httpProvider.useApplyAsync(true);
    }])

    app.run(['$rootScope', '$state', 'toaster', 'HTTP_ERRORS', function ($rootScope, $state, toaster, HTTP_ERRORS) {
        $rootScope.$on(HTTP_ERRORS.INTERNAL, function (e, error) {
            toaster.error('Server error!', 'please contact help desk.')
        });
        $rootScope.$on(HTTP_ERRORS.BAD_REQUEST, function (e, error) {
            toaster.error('Server error!', 'please contact help desk.')
        });
        $rootScope.$on(HTTP_ERRORS.INTERNAL_SERVER_ERROR, function (e, error) {
            toaster.error('Server error!', 'please contact help desk.')
        });
        $rootScope.$on("OTHER_ERRORS", function (e, error) {
            toaster.error('Server error!', 'please contact help desk.')
        });
        $rootScope.$on('$stateChangeError', function (e, toState, toParams, fromState, fromParams, resolve) {
            if (angular.isObject(resolve) && resolve.type === 'redirect') {
                $state.go(resolve.state.state, resolve.state.stateParams);
                return false;
            }
        });

    }]);


})();