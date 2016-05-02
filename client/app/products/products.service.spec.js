'use strict';

describe('Service: Product', function () {

  // load the service's module
  beforeEach(module('beer2App.products'));

  // instantiate service
  var products;
  beforeEach(inject(function (_products_) {
    Products = _Product_;
  }));

  it('should do something', function () {
    expect(!!Product).toBe(true);
  });

});
