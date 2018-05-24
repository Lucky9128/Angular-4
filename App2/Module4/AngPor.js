var app = angular.module("AngProApp",[]);
app.controller("AngProCnt",function($scope,$timeout,$q){
    
    function provide(){
        var value = null;
        var defer = $q.defer();
        $timeout(function(){
        defer.resolve("How are you");
        },2000);
        return defer.promise;        
    }
    provide().then(function(response){
        $scope.value = response;
    })
});