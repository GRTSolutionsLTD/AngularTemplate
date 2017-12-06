(function () {
    'use strict';
    var root = 'Schedule/';

    var ROOT_PATH = {
        PAGES: root + 'Pages/',
        DIRECTIVES: root + 'Common/Directives/',
        CORE: {
            DIRECTIVES: root + 'Core/Directives/'
        }
    }

    angular.module('app.core')
    .constant('ROOT_PATH', ROOT_PATH);
})()

