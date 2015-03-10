'use strict';

/**
 * @ngdoc service
 * @name shuwoShopApp.shop
 * @description
 * # shop
 * Service in the shuwoShopApp.
 */
angular.module('shuwoShopApp')
  .service('shop', ['$http', 'constants', function shop($http, constants) {
    return {
      getMyShop: function () {
        return $http.get(constants.API.myShop);
      },
      changeShopStatus: function (data) {

        return $http.post(constants.API.shopOpen, data);
      },
      updateShop: function (data) {
        return $http.post(constants.API.myShop, data);
      }
    }
  }]);
