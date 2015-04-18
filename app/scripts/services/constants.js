'use strict';

/**
 * @ngdoc service
 * @name shuwoShopApp.constants
 * @description
 * # constants
 * Service in the shuwoShopApp.
 */
angular.module('shuwoShopApp')
  .service('constants', ['configuration', function constants(configuration) {
    var prefix = configuration.urlPrefix;
    return {
      API: {
        shop: prefix + '/shop',
        shopOpen: prefix + '/shop/isopen',
        myShop: prefix + '/usershop',
        order: prefix + '/shop/orders',
        singleOrder: prefix + '/order',
        allProducts: prefix + '/shop/allproducts',
        product: prefix + '/product',
        weight: prefix + '/weight',
        orderCancel: prefix + '/ordercancel',
        searchOrder: prefix + '/searchorderbyshop'
      }
    }
  }]);
