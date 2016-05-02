'use strict';
(function(){

class ProductsComponent {
  constructor($scope, Product) {
    this.message = 'Hello';
    $scope.products= Product;
    console.log($scope.products);
  }
}

angular.module('beer2App')
  .component('products', {
    templateUrl: 'app/products/products.html',
    controller: ProductsComponent
  });



})();
