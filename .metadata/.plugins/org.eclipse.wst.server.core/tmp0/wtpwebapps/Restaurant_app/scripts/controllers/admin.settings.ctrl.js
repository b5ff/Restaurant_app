/**
 * Created by vikasboinpally on 7/2/15.
 */
(function(){
    'use strict';

    angular.module('myApp').controller('AdminSettingsController',AdminSettingsCntrlFn);

    AdminSettingsCntrlFn.$inject = [];
    function AdminSettingsCntrlFn(){
        var adminst = this;

        console.log("Admin Settings Controller");
        adminst.appSettings = function(isValid){
            if(isValid){
                console.log("In the App Settings function");
                console.log(adminst.settings);
            }
        }
    }
})();