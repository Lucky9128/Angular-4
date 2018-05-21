var app = angular.module("AngProApp",[]);
app.controller("AngProCnt",function($scope,$timeout,$q){
    
    function provide(){
        var value = null;
        var defer = $q.defer();
        $timeout(function(){
        defer.resolve("A");
        },2000);
        return defer.promise;        
    }
    provide().then(function(response){
       return response+"B";
    }).then(function(res){
        return res+"C";
    }).then(function(res2){
        return res2+"D";
    }).then(function(ret){
        $scope.value =ret;
    })
});