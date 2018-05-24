app.controller('appCnt',['$scope','MyServ',function($scope,$MyServ){
	$scope.my = function(){
		$scope.name = $MyServ.show();
	}
	$scope.my = function(val){
		$scope.name = $MyServ.show2(val);
	}
}]);