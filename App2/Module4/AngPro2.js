var app = angular.module("AngProApp",[]);
app.controller("AngProCnt",function($scope,$timeout,$q){
    $scope.temp = ['hi','how are you','sds','dsds','abc'];
    $scope.myarr = ['start'];
    $scope.leng = $scope.temp.length;
    function provide(i){
        var deferr = $q.defer();
        $timeout(function(){
            deferr.resolve($scope.temp[i]);
        },1500);
        return deferr.promise;
    }    
    var i=0;
    function my(){
        
            provide(i).then(function(res){
                $scope.cuur = i+"=>"+res;
                $scope.myarr.push(res);
               if(i<$scope.temp.length-1){
                   ++i;
                   console.log(i);
                   my();
               }
            },function(req){
                $scope.myarr.push("error"+req);
            });
    }
    my();
    
});

