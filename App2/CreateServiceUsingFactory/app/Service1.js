app.controller('appCnt',['$scope','MyServ',function($scope,$MyServ){
	$scope.add=function(){
		$scope.Res = $MyServ.sum($scope.v1,$scope.v2);
	};
	$scope.sub=function(){
		$scope.Res = $MyServ.sub($scope.v1,$scope.v2);
	};
	$scope.mul=function(){
		$scope.Res = $MyServ.mul($scope.v1,$scope.v2);
	};
	$scope.div=function(){
		$scope.Res = $MyServ.divid($scope.v1,$scope.v2);
	}
}]);