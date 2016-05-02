// 'use strict';
// (function(){

class ProductsComponent {
  constructor($scope, Product) {
    this.message = 'Hello';
    $scope.products= Product.query();
    console.log($scope.products);
  }
}

angular.module('beer2App')
  .component('products', {
    templateUrl: 'app/products/products.html',
    controller: ProductsComponent
  })

  .controller('ProductViewCtrl', function ($scope, $state, $stateParams, Product) {
      $scope.product = Product.get({id: $stateParams.id});

      $scope.deleteProduct = function(product){
        Product.delete(product);
        $state.go('products');
      }
    })

    .controller('ProductNewCtrl', function ($scope, $state, Product) {
      $scope.product = {}; // create a new instance
      $scope.addProduct = function(product){
        Product.create($scope.product);
        $state.go('products');
      }
    })

    .controller('ProductEditCtrl', function ($scope, $state, $stateParams, Product) {
      $scope.product = Product.get({id: $stateParams.id});

      $scope.editProduct = function(product){
        Products.update($scope.product);
        $state.go('products');
      }
    });
  angular.module('meanstackApp')
    .controller('ProductsCtrl', function ($scope, Product) {
      $scope.products = Product.query();
    })
