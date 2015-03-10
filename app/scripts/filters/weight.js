'use strict';

/**
 * @ngdoc filter
 * @name shuwoShopApp.filter:weight
 * @function
 * @description
 * # weight
 * Filter in the shuwoShopApp.
 */
angular.module('shuwoShopApp')
  .filter('weight', function () {
    return function (input) {
      if (input < 500) {
        return input + 'g';
      } else {
        return Number(input / 1000).toFixed(2) + 'kg';
      }
    };
  });
