'use strict';
(function(){

class ProductsComponent {
  constructor(Product) {
    this.number = 1111110;
    this.data = Product.data();
console.log(this.data);

    }

message(){
console.log();

}

addNumber(newNumber){
  this.number += newNumber;
  this.newNumber = 0;
}

}

angular.module('beer2App')
  .component('products', {
    templateUrl: 'app/products/products.html',
    controller: ProductsComponent
  });

})();
