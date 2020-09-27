(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.name = '';
        $scope.Msg = '';
        $scope.Checking = function () {
            var Food = $scope.name;
            var Menu = Food.split(',');
            var count = 0;
            for (const i in Menu) {
                if (Menu[i] && Menu[i] != " ") {
                    count++;
                }
            }
            if (count==0) {
                $scope.Msg = 'Please enter data first';
                $scope.myStyle = {'color':'red', "border-style" : "solid" ,"border-color" : "red"};
            }else if(count<4){
                $scope.Msg = 'Enjoy!';
                $scope.myStyle = {color:'green', "border-style" : "solid" ,"border-color" : "green"};
            }else{
                $scope.Msg = 'Too much!';
                $scope.myStyle = {color:'green', "border-style" : "solid" ,"border-color" : "green"};
            }
        };
    }
    })();
    