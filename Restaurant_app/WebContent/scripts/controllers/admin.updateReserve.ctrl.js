/**
 * Created by vikasboinpally on 7/6/15.
 */
(function(){
    'use strict';

    angular.module('myApp').controller('UpdateRecordController',UpdateRecordCntrlFn);

    UpdateRecordCntrlFn.$inject = ['$rootScope','$routeParams','$http'];
    function UpdateRecordCntrlFn($rootScope,$routeParams,$http){
        var updRec = this;
        console.log("Admin Update Record Controller");
        //console.log($routeParams);
        updRec.reserve= $routeParams;
        //console.log(updRec.rs);
        //console.log("id is : "+updRec.rs.reservationId);

        updRec.updateReservation = function(isValid){
            if(isValid){
                console.log("Inside Update Reservation Function");
                //console.log(updRec.reserve);

                $http({
                    method: 'POST',
                    url: 'api/reservation/update/',
                    data: updRec.reserve
                }).success(function (data) {
                    //console.log(data);
                    updRec.updatedReservation = data;
                    if (updRec.updatedReservation.status == "success") {
                        updRec.updatedReservation.show = true;
                        //use this condition to show confirmation message after updating reservation
                    }
                    console.log(updRec.updatedReservation);
                }).error(function (error) {
                    console.log(error);
                });
                updRec.reserve = null;
            }

        }
    }
})();