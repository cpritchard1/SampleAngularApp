(function () {
    'use strict';

    angular.module('routerApp')
        .config(['$httpProvider', '$urlRouterProvider', config]);

    function config($httpProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when('/', '/')
            .when('', '/')
            .otherwise('/home');

        // Setup global api handling (this is in common/factories/httpResponseInterceptor.js)
        // $httpProvider.interceptors.push('HttpResponseInterceptor');
        // $httpProvider.defaults.withCredentials = true;
        //
        // // $httpProvider.defaults.useXDomain = true;
        // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }

    // angular.module('myApp')
    //     .factory('HttpResponseInterceptor', ['$q', 'SessionService', 'CommonFunctions', HttpResponseInterceptor]);
    //
    // function HttpResponseInterceptor($q, SessionService, CommonFunctions) {
    //
    //     return {
    //
    //         responseError: function(error) {
    //             switch (error.status) {
    //                 case 401:
    //                     SessionService.redirectTo401Page();
    //                     break;
    //                 case 404:
    //                     SessionService.redirectTo404Page();
    //                     break;
    //                 default:
    //                     // CommonFunctions.showToasterErrorMsg(error.data.msg);
    //             }
    //             return $q.reject(error);
    //         }
    //     }
    // }

})();
