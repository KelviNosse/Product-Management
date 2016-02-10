'use strict';

var app = angular.module('ProductsApp');

app.controller('editmodeController', ['$scope', function($scope) {
    var ctrl = this;
    
    ctrl.enterEvent = function(event) {
            if (event.which === 13){
                $scope.$parent.product.editMode = $scope.$parent.product.Name.length === 0; 
            }
    };
}]);

app.controller('ProductCtrl', [ '$scope', 'Product', '$timeout', ($scope, Product, $timeout) => {
    $scope.products = Product.query( () => {
        
        let genId = () => {
          let pIds = [];
            
          for (var i = 0; i < $scope.products.length; i++)  
              pIds.push($scope.products[i].Id);
            
          return Math.max.apply(null, pIds)+1;
        };
        
        $scope.insert = function(name) {
            if (!name || name.length === 0) return;
            
            $scope.products.push( { Id: $scope.products.length > 0 ? genId() : 1, Name: name } );
            
            $scope.name = "";
        };
    });
    
    $scope.showSavePrompt = false;
    $scope.showHelpPrompt = false;
    $scope.editMode = false;
    
    $scope.triggerSavePrompt = () => {
        $scope.showSavePrompt = true;
        $timeout(() => {
            $scope.showSavePrompt = false;
        }, 2000);
    }; 
    
    $scope.triggerHelpPrompt = () => {
        $scope.showHelpPrompt = true;
        $timeout(() => {
            $scope.showHelpPrompt = false;
        }, 3500);
    };
    
    $scope.saveProducts = () => {
        Product.save($scope.products, $scope.triggerSavePrompt);
    };

    $scope.delete = function(index) {
        $scope.products.splice(index, 1);  
    };
    
    $scope.edit=function(producto){
        producto.editMode = true;
    };
}]);
