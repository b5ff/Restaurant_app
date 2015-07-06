/**
 * Created by vikasboinpally on 7/2/15.
 */
(function(){
    'use strict';

    angular.module('myApp').controller('AdminSettingsController',AdminSettingsCntrlFn);

    AdminSettingsCntrlFn.$inject = ['$rootScope'];
    function AdminSettingsCntrlFn($rootScope){
        var adminst = this;


        console.log("Admin Settings Controller");
        adminst.appSettings = function(){
            console.log("In the App Settings function");


        }
    }
})();