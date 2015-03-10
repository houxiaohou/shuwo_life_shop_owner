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
    };
  });
