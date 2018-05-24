app.service('MyServ',function(){
	this.show = function(){
		return "Lucky";
	}
	
	this.show2 = function(val){
		return "Lucky "+val;
	}
	
});