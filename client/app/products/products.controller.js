'use strict';
(function() {

  class ProductsComponent {
    constructor(Product) {
      this.products = Product.query();
    }
  }

  angular.module('beer2App')
    .component('products', {
      templateUrl: 'app/products/products.html',
      controller: ProductsComponent
    });

})();
