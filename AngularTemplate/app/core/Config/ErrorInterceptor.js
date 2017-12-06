(function (undefined) {

    //TODO:seperate it to differant pages
    errorInterceptor.$inject = ['$q', '$rootScope', 'HTTP_ERRORS'];
    function errorInterceptor($q, $rootScope, HTTP_ERRORS) {
        return {
            responseError: function (error) {
                if (error.config && error.config.suppressErrors) {
                    return $q.reject(error);
                }

                var ERRORS = {
                    UNAUTHORIZED: 401,
                    FORBIDDEN: 403,
                    BAD_REQUEST: 400,
                    INTERNAL: 404,
                    INTERNAL_SERVER_ERROR:500
                };

                switch (error.status) {
                    case ERRORS.UNAUTHORIZED: {
                        $rootScope.$broadcast(HTTP_ERRORS.UNAUTHORIZED, error);

                        return $q.reject(error);
                    }
                    case ERRORS.FORBIDDEN: {
                        $rootScope.$broadcast(HTTP_ERRORS.FORBIDDEN, error);

                        return $q.reject(error);
                    }
                    case ERRORS.BAD_REQUEST: {
                        $rootScope.$broadcast(HTTP_ERRORS.BAD_REQUEST, error);

                        return $q.reject(error);
                    }
                    case ERRORS.INTERNAL: {
                        $rootScope.$broadcast(HTTP_ERRORS.INTERNAL, error);

                        return $q.reject(error);
                    }
                    case ERRORS.INTERNAL_SERVER_ERROR: {
                        $rootScope.$broadcast(HTTP_ERRORS.INTERNAL_SERVER_ERROR, error);

                        return $q.reject(error);
                    }
                    default:
                        $rootScope.$broadcast("OTHER_ERRORS", error);

                        return $q.reject(error);
                }
                return $q.reject(error);
            }
        };
    };
    angular.module('app.core')
        .config([ '$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push(errorInterceptor);
    }])

})();