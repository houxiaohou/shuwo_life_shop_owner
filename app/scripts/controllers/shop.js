'use strict';

/**
 * @ngdoc function
 * @name shuwoShopApp.controller:ShopCtrl
 * @description
 * # ShopCtrl
 * Controller of the shuwoShopApp
 */
angular.module('shuwoShopApp')
  .controller('ShopCtrl', ['$scope', '$state', 'page', 'shop',
    function ($scope, $state, page, shop) {
      page.setFooterNav('shop');
      page.showFooter();

      $scope.loading = true;

      shop.getMyShop().success(function (data) {
        $scope.loading = false;
        data.isopen = data.isopen == '1';
        $scope.shop = data;
      });

      $scope.updateShop = function () {
        var data = angular.copy($scope.shop);
        if ($scope.shop.isopen) {
          data.isopen = 1;
        } else {
          data.isopen = 0;
        }
        shop.updateShop(data).success(function () {
          $state.reload();
        });
      };

      $scope.shopStatus = function () {
        var data = angular.copy($scope.shop);
        if ($scope.shop.isopen) {
          data.isopen = 0;
        } else {
          data.isopen = 1;
        }
        shop.changeShopStatus(data).success(function () {
          $state.reload();
        });
      };
    }]);
