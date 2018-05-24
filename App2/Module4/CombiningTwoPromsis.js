var app = angular.module("AngProApp",[]);
app.controller("AngProCnt",function($scope,$timeout,$q){
    
    function fun(){
        var defer = $q.defer();
        defer.resolve("Lucky");
        return defer.promise;        
    }
  	function fun2(){
	  var defer2 = $q.defer();
	  defer2.resolve("Agrawal");
	  return defer2.promise;
	}
  	function my(){
	  $q.all(fun(),fun2()).then(function(res){
		$scope.val1 = res[0];
		$scope.val2 = res[1];
	  })
	}
  my();
});