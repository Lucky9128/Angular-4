app.factory('MyServ',function(){
	var obj ={};
	obj.sum = function(v1,v2){
		return v1+v2;
	}
	obj.sub = function(v1,v2){
		return v1-v2;
	}
	obj.mul = function(v1,v2){
		return v1*v2;
	}
	obj.divid = function(v1,v2){
		return v1/v2;
	}
	return obj;
})