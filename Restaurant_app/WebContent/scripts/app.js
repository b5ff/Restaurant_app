/**
 * Created by vikasboinpally on 6/30/15.
 */
(function () {
    'use strict';

    angular.module('myApp',['ngMessages','ngRoute']);
    angular.module('myApp').config(moduleConfigFn);

    moduleConfigFn.$inject = ['$routeProvider','$locationProvider'];
    function moduleConfigFn($routeProvider, $locationProvider){

        $routeProvider
            .when('/',{
                templateUrl:'partials/cust.home.tmpl.html',
                controller:'CustHomeController',
                controllerAs:'custHomeCt'
            })
            .when('/makeReservation',{
                templateUrl:'partials/cust.makeReserve.tmpl.html',
                controller:'CustMakeReserveController',
                controllerAs:'custMRCt'
            })
            .when('/changeReservation',{
                templateUrl:'partials/cust.changeReserve.tmpl.html',
                controller:'CustChangeReserveController',
                controllerAs:'custCr'
            })
            .when('/adminLogin',{
                templateUrl:'partials/cust.adminLogin.tmpl.html',
                controller:'CustAdminLoginController',
                controllerAs:'custAL'
            })
            .when('/contact',{
                templateUrl:'partials/cust.contact.tmpl.html',
                controller:'CustContactController',
                controllerAs:'custContact'
            })
            .when('/adminHome',{
                templateUrl:'partials/admin.home.tmpl.html',
                controller:'AdminHomeController',
                controllerAs:'adminhmct'
            })
            .when('/adminSettings',{
                templateUrl:'partials/admin.settings.tmpl.html',
                controller:'AdminSettingsController',
                controllerAs:'adminst'
            })
            .otherwise({
                redirectTo:'/'
            });
    }


})();