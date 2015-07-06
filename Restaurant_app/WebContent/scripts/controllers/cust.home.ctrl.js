/**
 * Created by vikasboinpally on 7/2/15.
 */
(function(){
    'use strict';

    angular.module('myApp').controller('CustHomeController',CustHomeContrlFn);

    CustHomeContrlFn.$inject = [];
    function CustHomeContrlFn(){
        var custHomeCt = this;

        console.log("Cust Home Controller");
    }
})();
