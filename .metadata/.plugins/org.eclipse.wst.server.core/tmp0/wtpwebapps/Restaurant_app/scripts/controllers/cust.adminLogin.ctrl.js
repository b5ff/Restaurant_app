/**
 * Created by vikasboinpally on 7/2/15.
 */
(function(){
    'use strict';

    angular.module('myApp').controller('CustAdminLoginController',CustAdminLoginContrlFn);

    CustAdminLoginContrlFn.$inject = ['$location','$rootScope'];
    function CustAdminLoginContrlFn($location,$rootScope){
        var custAL = this;

        console.log("Admin Login Controller");

        $rootScope.adminAuth = function(isValid){

            if(isValid){
                //make the control go into this only when all the form values are submitted
                console.log("username is : "+custAL.auth.userName+" and password is: "+custAL.auth.userName);

                if(custAL.auth.userName == "admin" && custAL.auth.password == "admin"){
                $location.path('/adminHome');
                }
                custAL.auth = null;
            }

        }

    }
})();