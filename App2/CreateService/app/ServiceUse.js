app.controller('appCnt',['$scope','MyServ',function($scope,$MyServ){
	$scope.my = my;
	function my(){
		$scope.name = $MyServ.show();
	}
	function my(val){
		$scope.name = $MyServ.show2(val);
	}
}]);