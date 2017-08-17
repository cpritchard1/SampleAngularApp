(function () {
    'use strict';

    angular.module('routerApp.home').controller('homeController', [
        '$log', '$scope', '$state', '$timeout', 'CommonFunctions', 'HomeService', HomeController
    ]);

    /**
     * Controller, this function acts as a link between the .tpl.html and the service functions. Please avoid  * placing extra logic in here. The actual logic should exist at the service level.
     */
    function HomeController($log, $scope, $state, $timeout, CommonFunctions, HomeService) {
        var model = this;
        var logPrefix = 'HomeController --> ';

        var oToday = new Date();

        init();
        /*
         * Functions listed in the below init() method are public (visible to other modules), any other methods not in the init() are only visible to this controller.
         */
        function init() {

        }
    }

    /*************************************************************************
     * ************************Events ****************************************
     * ***********************************************************************
     * */

})();