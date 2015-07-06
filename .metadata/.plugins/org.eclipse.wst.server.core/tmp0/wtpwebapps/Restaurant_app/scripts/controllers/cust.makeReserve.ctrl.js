/**
 * Created by vikasboinpally on 7/2/15.
 */
(function () {
    'use strict';

    angular.module('myApp').controller('CustMakeReserveController', CustMakeReserveContrlFn);

    CustMakeReserveContrlFn.$inject = ['$filter', '$http'];
    function CustMakeReserveContrlFn($filter, $http) {
        var custMRCt = this;

        console.log("Cust Make Reserve Controller");
        custMRCt.makeReservation = function (isValid) {
            if (isValid) {
                //make the control go into this only when all the form values are submitted

                custMRCt.reserve.date = $filter('date')(custMRCt.reserve.date, "yyyy-MM-dd");//filtering date
                //console.log(custMRCt.reserve);
                //console.log("Date selected is : "+custMRCt.reserve.date);
                //console.log("Time selected is : "+custMRCt.reserve.time);
                $http({
                    method: 'POST',
                    url: 'api/customer/add/',
                    data: custMRCt.reserve
                }).success(function (data) {
                    //console.log(data);
                    custMRCt.newReservation = data;
                    if (custMRCt.newReservation.status == "success") {
                        custMRCt.newReservation.show = true;
                        //use this condition to show confirmation message after making new reservation
                    }
                }).error(function (error) {
                    console.log(error);
                });
                custMRCt.reserve = null;

            }

        }

    }
})();