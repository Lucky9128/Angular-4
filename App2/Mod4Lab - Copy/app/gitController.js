var Gapp = angular.module('gitHubService',['ngResource']);
Gapp.factory('gitHub',[
	'$resource',function($resource){
		return $resource('https://api.github.com/:action/angular/:id',
						 {
			action:'@action',
			id:'@id'
		},
						 {
			getAll: {
						 method:'GET',
				isArray:true,
				params:{action:'orgs',id:'repos'}
						 },
						 getDetail:{
						 method:'Get',
						 params:{action:'repos'}
						 },
						 });
	}
]);