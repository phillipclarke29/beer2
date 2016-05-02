'use strict';

angular.module('beer2App')
  .factory('Product', function () {
    return [
       {id: 1, title: 'Beer 1', price: 2.45, quantity: 10, description: 'Great Beer'},
       {id: 2, title: 'Beer 2', price: 3.45, quantity: 10, description: 'Fantastic Beere'},
       {id: 3, title: 'Beer 3', price: 1.45, quantity: 10, description: 'Wonderful beer'},
       {id: 4, title: 'Beer 4', price: 1.45, quantity: 10, description: 'Super Beer'},
       {id: 5, title: 'Beer 5', price: 3.45, quantity: 10, description: 'Lovely Beer'}
     ];

  });
