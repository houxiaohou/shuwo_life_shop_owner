'use strict';

/**
 * @ngdoc service
 * @name shuwoShopApp.product
 * @description
 * # product
 * Service in the shuwoShopApp.
 */
angular.module('shuwoShopApp')
  .service('product', ['$http', 'constants', function product($http, constants) {
    return {
      listAllProducts: function () {
        return $http.get(constants.API.allProducts);
      },
      getProductById: function (id) {
        return $http.get(constants.API.product + '/' + id);
      },
      changeProductStatus: function (data) {
        return $http.post(constants.API.product + '/' + data.productid + '/issale', {issale: data.issale ? 1 : 0});
      },
      updateProduct: function (data) {
        return $http.post(constants.API.product + '/' + data.productid, data);
      }
    }
  }]);
