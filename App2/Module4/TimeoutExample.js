var app = angular.module("AngProApp",[]);
app.controller("AngProCnt",function($scope,$timeout){
    $scope.model ="";
    $scope.Sum = function(){
        $timeout(function(){
            $scope.model ="Hello Brother";
        },2000);
    } 
});