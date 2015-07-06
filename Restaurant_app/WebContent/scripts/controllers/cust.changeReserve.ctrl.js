/**
 * Created by vikasboinpally on 7/2/15.
 */
(function(){
    'use strict';

    angular.module('myApp').controller('CustChangeReserveController',CustChangeReserveContrlFn);

    CustChangeReserveContrlFn.$inject = ['$http'];
    function CustChangeReserveContrlFn($http){
        var custCr = this;
        custCr.confirmButtonClicked = false;

        console.log("Cust Change Reserve Controller");

        custCr.changeReservation = function(isValid){
            if(isValid){
            //make the control go into this only when all the form values are submitted
                custCr.confirmButtonClicked = true;

                $http({
                    method: 'GET',
                    url: 'api/reservation/get/'+custCr.confirmationNumber
                }).success(function(data){
                    custCr.dataFromDB = data;
                    custCr.res = custCr.dataFromDB.payload;
                    custCr.msg = custCr.dataFromDB.message;
                    console.dir(custCr.res);
                    console.log("Data in cust.msg is : "+ custCr.msg);
                }).error(function(error){
                    console.log(error);
                });


                custCr.confirmationNumber  =null;
            }
        }

    }
})();