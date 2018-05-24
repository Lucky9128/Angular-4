app.controller('labController', [
    '$scope','$http',
    function ($scope,$http) {
		var url = "../wel.html";
		$http.get(url).then(function(res){
			$scope.Name = res.data;
		})
	}]);