'use strict';

describe('Filter: firstOrder', function () {

  // load the filter's module
  beforeEach(module('shuwoShopApp'));

  // initialize a new instance of the filter before each test
  var firstOrder;
  beforeEach(inject(function ($filter) {
    firstOrder = $filter('firstOrder');
  }));

  it('should return the input prefixed with "firstOrder filter:"', function () {
    var text = 'angularjs';
    expect(firstOrder(text)).toBe('firstOrder filter: ' + text);
  });

});
