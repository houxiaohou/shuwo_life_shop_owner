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
      return input === '1' ? '（首单减免）' : '';
    };
  });
