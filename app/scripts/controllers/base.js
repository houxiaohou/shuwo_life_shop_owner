'use strict';

/**
 * @ngdoc function
 * @name shuwoShopApp.controller:BaseCtrl
 * @description
 * # BaseCtrl
 * Controller of the shuwoShopApp
 */
angular.module('shuwoShopApp')
  .controller('BaseCtrl', ['$scope', 'page', function ($scope, page) {
    $scope.page = page;
  }]);
