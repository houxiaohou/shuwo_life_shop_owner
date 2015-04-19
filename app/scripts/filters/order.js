'use strict';

/**
 * @ngdoc filter
 * @name shuwoShopApp.filter:order
 * @function
 * @description
 * # order
 * Filter in the shuwoShopApp.
 */
angular.module('shuwoShopApp')
  .filter('orderStatus', function () {
    return function (input) {
      if (input == 0) {
        return '待确认';
      }
      if (input == 1) {
        return '已确认';
      }
      if (input == 2) {
        return '无效';
      }
      if (input == 3) {
        return '已收货';
      }
    };
  });
angular.module('shuwoShopApp')
  .filter('orderPickup', function () {
    return function (order) {
      if (order.ispickup == '1') {
        return '（上门自提）';
      }
      var distance = parseInt(order.distance);
      if (distance < 50 && distance != 0) {
        return '（' + order.distance + '米）';
      }
    };
  });

