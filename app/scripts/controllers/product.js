'use strict';

/**
 * @ngdoc function
 * @name shuwoShopApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the shuwoShopApp
 */
angular.module('shuwoShopApp')
  .controller('ProductCtrl', ['$scope', 'page', 'product', function ($scope, page, product) {
    page.setFooterNav('product');
    page.showFooter();

    $scope.loading = true;

    product.listAllProducts().success(function (data) {
      $scope.products = [];
      for (var i in data) {
        var p = data[i];
        p.issale = p.issale == '1';
        $scope.products.push(p);
      }
      $scope.loading = false;
    });

    $scope.changeProduct = function (p) {
      product.changeProductStatus(p);
    }

  }]);
angular.module('shuwoShopApp')
  .controller('ProductDetailCtrl', ['$scope', '$state', '$stateParams', 'page', 'product',
    function ($scope, $state, $stateParams, page, product) {
      page.setFooterNav('product');
      page.hideFooter();

      var productId = $stateParams.id;
      $scope.loading = true;

      product.getProductById(productId).success(function (data) {
        data.discount = Number(data.discount);
        data.unitweight = Number(data.unitweight);
        $scope.product = data;
        $scope.loading = false;
      });


      $scope.updateProduct = function () {
        var data = $scope.product;
        if (data.issale) {
          data.issale = 1;
        } else {
          data.issale = 0;
        }
        product.updateProduct(data).success(function () {
          $state.go('shuwoShop.product.list');
        });
      };


    }]);
