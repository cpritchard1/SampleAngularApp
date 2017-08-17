(function() {
    'use strict';

    angular.module('routerApp')
        .controller('AppController', ['$rootScope', AppController]);

    function AppController($rootScope) {
        $rootScope.pageTitle = 'My App';
    }
})();