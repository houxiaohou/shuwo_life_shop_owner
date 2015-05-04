'use strict';

/**
 * @ngdoc filter
 * @name shuwoShopApp.filter:firstOrder
 * @function
 * @description
 * # firstOrder
 * Filter in the shuwoShopApp.
 */
angular.module('shuwoShopApp')
  .filter('firstOrder', function () {
    return function (input) {
      if (input.discount > 0) {
        return "（优惠单）";
      } else {
        return '';
      }
    };
  });
