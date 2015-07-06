/**
 * Created by vikasboinpally on 7/2/15.
 */
(function(){
    'use strict';

    angular.module('myApp').controller('CustContactController',CustContactContrlFn);

    CustContactContrlFn.$inject = [];
    function CustContactContrlFn(){
        var custContact = this;

        console.log("Customer Contact Controller");

    }
})();