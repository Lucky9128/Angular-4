app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = { title: 'Pizza Builder',
                       availableToppings:['Cheese','Pepperoni','Bacon','Pineapple','Sausage','Ham','Chicken','Mushrooms','Onion','Olives','Green Peppers'],
            toppings:[]
                       }
        $scope.addTopping = function(topping){
            $scope.model.toppings.push(topping);
            var index = $scope.model.availableToppings.indexOf(topping);
            $scope.model.availableToppings.splice(index,1);
            $scope.model.search = null;
            $scope.model.Added = true;
        }
    }
]);