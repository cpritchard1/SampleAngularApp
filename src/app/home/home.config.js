(function () {
    'use strict';

    angular.module('routerApp.home')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('home', {
                url: '/home',
                views: {
                    "main": {
                        controller: "homeController as homeController",
                        templateUrl: "home/home.tpl.html"
                    }
                }
            });
        });
})();