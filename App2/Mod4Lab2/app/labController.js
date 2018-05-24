app.controller('labController', [
    '$scope','$timeout','$q','$http',
    function ($scope,$timeout,$q,$http) {
		$scope.model = {
			num:0,
			result:'ready'
		}
		$scope.checkOddNumber= function(input){
			$scope.model.result='Working...';
			$scope.checkOddNumberHandler(input).then(function(res){
				$scope.model.result = 'Success: '+res;
			},function(res){
				$scope.model.result = 'Error: '+ res;
			})
		}
		$scope.checkOddNumberHandler = function(input){
			var defer = $q.defer();
			$timeout(function(){
				if(isNumberOdd(input)){
					defer.resolve('Yes, an odd number');
				}else{
					defer.reject('Not an odd number');
				}
			},1000);
				return defer.promise;
		}
		function isNumberOdd(input){
			return !isNaN(input)&&input%2==1;
		}
    	$scope.getRepos = function(){
			$http.get('Https://api.github.com/orgs/angular/repos').then(function(res){
				$scope.model.repos = res.data;	
			},function(res){
				$scope.model.repos = res.data.message;
			});
		}
		$scope.loadDetail = function(name){
			var url = 'https://api.github.com/repos/angular/'+name;
			$http.get(url).then(function(res){
				$scope.model.detail = res.data;
			},function(res){
				$scope.model.detail = { error: true, message: 'Error: ' + response.data.message };
			});
		}
	}
]);