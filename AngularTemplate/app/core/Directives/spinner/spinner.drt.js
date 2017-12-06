(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('spinner', spinner);

    spinner.$inject =['ROOT_PATH', '$rootScope'];

    function spinner(ROOT_PATH, $rootScope) {
        var DIR = ROOT_PATH.CORE.DIRECTIVES;
        var directive = {
            restrict: 'EA',
            templateUrl: DIR + 'spinner/spinner.tpl.html',
            scope: {
            },
            link: function link(scope, element, attrs) {
                scope.spinner = {
                    isShown: false
                };

                $rootScope.$on('spinner.show', function (event,url) {
                    scope.spinner.isShown = true;
                });

                $rootScope.$on('spinner.hide', function (event, response) {
                    scope.spinner.isShown = false;
                });


            }
        };

        return directive;
    }

})();