app.controller('labController', [
    '$scope','registration',
    function ($scope,registration) {
		$scope.reset = reset;
	reset();
		function reset(){
			$scope.model = {};
		}
		var submit = function(data){
			registration.submit(data).$promise.then(function(res){
			$scope.my = res;
	},function(res){
	alert('failed');
	});
		}
		$scope.submit = submit;
    }
]);