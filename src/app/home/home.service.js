(function () {
    'use strict';

    angular.module('routerApp.home').service('homeService',
        ['$log', '$q', '$http', 'httpService', 'APP_CONFIGS', HomeService]);

    function HomeService($log, $q, $http, httpService, APP_CONFIGS) {
        var service = this;
        var logPrefix = 'HomeService --> ';

        init();

        /*
         * Functions listed in the below init() method are public (visible to other modules), any other
         * methods not in the init() are only visible to this controller.
         */
        function init() {
            $log.debug(logPrefix + 'init()');
        }
    }

})();