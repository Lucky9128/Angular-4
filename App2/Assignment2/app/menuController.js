app.controller("menuController",["$scope",function($scope){
    $scope.model = {title:"Our Menu",mainDish:""};
    $scope.changeMainDish = function(dish){
        $scope.model.mainDish = dish;
        $scope.Order = $scope.model.mainDish+" $13.99  ";
    }
    $scope.$watch("model.mainDish",function(newValue,oldValue){
       if(newValue === "Chole Kulche"){
           alert("You have selected "+newValue);
       } 
    });
}]);