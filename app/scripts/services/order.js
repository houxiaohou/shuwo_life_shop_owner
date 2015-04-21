'use strict';

/**
 * @ngdoc service
 * @name shuwoShopApp.order
 * @description
 * # order
 * Service in the shuwoShopApp.
 */
angular.module('shuwoShopApp')
  .service('order', ['$http', 'constants', function order($http, constants) {
    return {
      listOrders: function (params) {
        return $http.get(constants.API.order, {
          params: params
        });
      },
      getOrderById: function (id) {
        return $http.get(constants.API.singleOrder + '/' + id);
      },
      confirmWeight: function (data) {
        return $http.post(constants.API.weight, data);
      },
      cancelOrder: function (id, reason) {
        return $http.post(constants.API.orderCancel, {id: id, ordernotes: reason});
      },
      searchOrder: function (data) {
        return $http.post(constants.API.searchOrder, {search: data});
      }
    }
  }]);
