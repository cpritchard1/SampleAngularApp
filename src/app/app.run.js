(function () {
    'use strict';

    angular.module('routerApp')
        .run(['$window', '$rootScope', '$filter', '$log', 'CommonFunctions', '$state', run]);

    function run($window, $rootScope, $filter, $log, CommonFunctions, $state) {

        angular.element($window).bind('resize');
        $rootScope.$on('$stateChangeStart', onStateChangeStart);
        $rootScope.$on('$stateChangeSuccess', onStateChangeSuccess);
        $rootScope.$on('session:notAuthenticated', onNotAuthenticatedError);
        $rootScope.$on('session:notFound', onNotFoundError);

        function onStateChangeStart(event, toState) {
            var logPrefix = 'app.run.$stateChangeStart --> ';
            var toStateData = JSON.stringify(toState.data);
            $log.debug(
                logPrefix, ' state changed to ', toState.name, ' (url: "', toState.url, '", data: ', toStateData
            );

        }

        function onStateChangeSuccess(event, toState) {
            var logPrefix = 'app.run.$stateChangeSuccess --> ';
            $log.debug(logPrefix + 'page ' + toState.url + ' is loaded.');
            $rootScope.pageTitle = "My App";
        }

        function onNotAuthenticatedError() {
            $log.debug('app.run --> received notAuthenticatedError');
            $state.go('401');
        }

        function onNotFoundError(event, urlObj) {
            $log.debug('app.run --> received notFoundError for url "' + urlObj.url + '"');
            $state.go('404');
        }
    }
})();