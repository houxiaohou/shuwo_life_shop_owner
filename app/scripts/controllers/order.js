'use strict';

/**
 * @ngdoc function
 * @name shuwoShopApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the shuwoShopApp
 */
angular.module('shuwoShopApp')
  .controller('OrderDetailCtrl', ['$scope', '$state', '$stateParams', 'order', 'page',
    function ($scope, $state, $stateParams, order, page) {
      page.hideFooter();

      $scope.loading = true;

      var orderId = $stateParams.id;

      order.getOrderById(orderId).success(function (data) {
        $scope.order = data;
        $scope.loading = false;
      });

      $scope.confirmWeight = function () {
        var data = [];
        for (var i in $scope.order.productdetail) {
          var p = $scope.order.productdetail[i];
          if (p.attribute == '1') {
            if (p.weight === undefined || p.weight === '' || p.weight === 0) {
              alert('先输入准确的重量');
              return;
            }
            data.push({orderproductid: p.orderproductid, weight: p.weight});
          }
          if (p.attribute == '2') {
            data.push({orderproductid: p.orderproductid, weight: p.quantity * 250});
          }
          if (p.attribute == '3') {
            data.push({orderproductid: p.orderproductid, weight: p.quantity});
          }

        }
        order.confirmWeight({weightdetail: JSON.stringify(data)}).success(function (data) {
          $state.go('shuwoShop.main');
        });
      };

    }]);
angular.module('shuwoShopApp')
  .controller('OrderInvalidCtrl', ['$scope', '$state', '$stateParams', 'order', 'page',
    function ($scope, $state, $stateParams, order, page) {
      page.hideFooter();

      $scope.loading = true;

      var orderId = $stateParams.id;

      order.getOrderById(orderId).success(function (data) {
        $scope.order = data;
        $scope.loading = false;
      });

      $scope.reasones = [
        '距离太远',
        '未到起送价',
        '信息有误',
        '其他'
      ];

      $scope.reason = '';

      $scope.choseReason = function (r) {
        $scope.reason = r;
      };

      $scope.confirm = function () {
        if ($scope.reason == '') {
          alert('请选择原因');
          return;
        }
        order.cancelOrder(orderId, $scope.reason).success(function () {
          $state.go('shuwoShop.main');
        });
      };

    }]);
