app.provider('Lux',function(){
	var privateName = '';
	this.setName = function(newName){
		privateName = newName;
	};
	this.$get = function(){
		return {name : privateName};
	};
});
app.config(function(LuxProvider){
	LuxProvider.setName("Hello ");
});

/*
here if Lux is the service name then config function must have LuxProvider as an argument
*/