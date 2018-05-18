var app = angular.module("FirstApp",[]);
app.controller("Cntrl",["$scope",function($scope){
    $scope.Name ="Lucky";
    $scope.set = function(value){
        if(value === "true"){
            $scope.Main = true;           
        }else{
            $scope.Main = false;
        }
    }
}]);