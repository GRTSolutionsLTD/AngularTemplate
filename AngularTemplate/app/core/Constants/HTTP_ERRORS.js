(function () {
    'use strict';

    var HTTP_ERRORS = {
        UNAUTHORIZED: 'httpError.Unauthorized',
        FORBIDDEN: 'httpError.Forbidden',
        BAD_REQUEST: 'httpError.BadRequest',
        INTERNAL: 'httpError.Internal'
    }

    angular.module('app.core')
    .constant('HTTP_ERRORS', HTTP_ERRORS);
})()

