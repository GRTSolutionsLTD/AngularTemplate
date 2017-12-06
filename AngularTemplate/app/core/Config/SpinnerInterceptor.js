(function (undefined) {

    'use strict';
    spinnerInterceptor.$inject = ['$q', '$rootScope','spinner'];
    function spinnerInterceptor($q, $rootScope, spinner) {

        var numLoadings = 0;
       
        /**
         * Get if url matches with exclusions list
         * 
         * @param {string} url
         */
        function isExclusion(url) {
            var result = false;
            angular.forEach(spinner.exclusions, function (regexp) {
                if (regexp.test(url)) {
                    result = true;
                }
            });
            return result;
        };

        return {
            request: function (config) {
                if (!isExclusion(config.url)) {
                    numLoadings++;
                    $rootScope.$broadcast("spinner.show", config.url);
                }
                return config || $q.when(config);
            },
            response: function (response) {
                if (!isExclusion(response.config.url)) {
                    numLoadings--;
                    if (numLoadings === 0) {
                        $rootScope.$broadcast("spinner.hide", response);
                    }
                }
                return response || $q.when(response);
            },
            responseError: function (response) {
                if (!isExclusion(response.config.url)) {
                    numLoadings--;
                    if (!numLoadings) {
                        $rootScope.$broadcast("spinner.hide", response);
                    }
                }
                return $q.reject(response);
            }
        };
    };

    angular.module('app.core')
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push(spinnerInterceptor);
        }]);

    angular.module('app.core')
       .constant('spinner',{
           exclusions: []
       });


})();