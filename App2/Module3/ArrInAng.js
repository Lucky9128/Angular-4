var app = angular.module("MyApp",[]);
app.controller("Cnt",["$scope",function($scope){
    
    $scope.filterVal = 'Aie';
    $scope.CarList = [
        {'Name':'Utsav sal','Roll':3},
        {'Name':'Milan Aie','Roll':4},
        {'Name':'Lucky Aie','Roll':1},
        {'Name':'Pravin sal','Roll':2}
    ]
}]);