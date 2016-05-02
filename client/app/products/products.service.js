'use strict';

angular.module('beer2App')
  .factory('Product', function () {
    var last_id = 5;
    var example_products = [
       {id: 1, title: 'Beer 1', price: 2.45, quantity: 10, description: 'Great Beer'},
       {id: 2, title: 'Beer 2', price: 3.45, quantity: 10, description: 'Fantastic Beere'},
       {id: 3, title: 'Beer 3', price: 1.45, quantity: 10, description: 'Wonderful beer'},
       {id: 4, title: 'Beer 4', price: 1.45, quantity: 10, description: 'Super Beer'},
       {id: 5, title: 'Beer 5', price: 3.45, quantity: 10, description: 'Lovely Beer'}
     ];

     return {
      query: function(){
        return example_products;
      },

      get: function(product){
        for(var i=0; i< example_products.length; i++) {
          if(example_products[i].id == product.id)
            return example_products[i];
        }
        return null;
      },

      delete: function(product){
        for(var i=0; i< example_products.length; i++) {
          if(example_products[i].id == product.id){
            example_products.splice(i, 1);
            return true;
          }
        }
        return false;
      },

      create: function(product){
        product.id = ++last_id;
        example_products.push(product);
      },

      update: function(product){
        var item = this.get(product);
        if(!item) return false;

        item.title = product.title;
        item.price = product.price;
        item.quantity = product.quantity;
        item.description = product.description;
        return true
      }
    };
  });
