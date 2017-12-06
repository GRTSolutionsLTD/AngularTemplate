(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('loginService', ['$http', function loginSrv($http) {
            return {
                postUser: function login(user) {
                    return $http.post('/api/login', user);
                }
            };
        }
        ])

}());