/**
 * Created by vikasboinpally on 7/2/15.
 */
(function(){
    'use strict';

    angular.module('myApp').controller('AdminHomeController',AdminHomeContrlFn);

    AdminHomeContrlFn.$inject = ['$rootScope','$http','$route'];
    function AdminHomeContrlFn($rootScope,$http,$route){
        var adminhmct = this;

        console.log("Admin Home Controller");
        $http({
            method: 'GET',
            url: 'api/reservation/all'
        }).success(function(data) {
                adminhmct.dataFromDB = data;
                adminhmct.res = adminhmct.dataFromDB.payload;//Storing payload in 'res'
                //console.dir(adminhmct.res);
            console.log(adminhmct.res);
            })
            .error(function(error) {
                console.log(error);
            });
        adminhmct.updateRecords = function(id){//Do the update logic here
            console.log("Reservation ID retrieved = "+id);


        }
        adminhmct.deleteRecords= function(id){ //Do the delete logic here
            console.log("ID retrived is : "+id);

            $http({
                method: 'GET',
                url: 'api/reservation/delete/'+id
            }).success(function(data) {
                console.log(data);
            })
                .error(function(error) {
                    console.log(error);
                });
            $route.reload();
        }
    }
})();
