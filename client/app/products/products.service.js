'use strict';

angular.module('beer2App')
  .factory('Product', function() {
    var example_products = [{
      id: 1,
      title: 'Product 1',
      price: 123.45,
      quantity: 10,
      description: 'Lorem ipsum dolor sit amet'
    }, {
      id: 2,
      title: 'Product 2',
      price: 123.45,
      quantity: 10,
      description: 'Lorem ipsum dolor sit amet'
    }, {
      id: 3,
      title: 'Product 3',
      price: 123.45,
      quantity: 10,
      description: 'Lorem ipsum dolor sit amet'
    }, {
      id: 4,
      title: 'Product 4',
      price: 123.45,
      quantity: 10,
      description: 'Lorem ipsum dolor sit amet'
    }, {
      id: 5,
      title: 'Product 5',
      price: 123.45,
      quantity: 10,
      description: 'Lorem ipsum dolor sit amet'
    }];



    return {
      query: function() {
        return example_products;
      },
      get: function(product) {
        var result = {}
        angular.forEach(example_products, function(product) {
          if (product._id == params.id)
            return this.product = product;

        }, result);
        return result.product;
      }
    }



  });
