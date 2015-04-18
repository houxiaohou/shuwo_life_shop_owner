'use strict';

/**
 * @ngdoc function
 * @name shuwoShopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shuwoShopApp
 */
angular.module('shuwoShopApp')
  .controller('MainCtrl', ['$scope', 'page', 'order', function ($scope, page, order) {
    page.setFooterNav('order');
    page.showFooter();

    $scope.status = [
      {label: '全部订单', value: -1},
      {label: '未处理订单', value: 0},
      {label: '已确认订单', value: 1},
      {label: '无效订单', value: 2}
    ];

    $scope.orderStatus = $scope.status[0];

    var count = 5;

    loadOrders();

    function loadOrders() {
      $scope.loading = true;
      $scope.orders = [];
      $scope.start = 0;
      $scope.end = false;

      $scope.loadMore = function () {
        if ($scope.end) {
          return;
        }
        $scope.loading = true;
        order.listOrders($scope.start, count, $scope.orderStatus.value).success(function (data) {
          if (data.length < count) {
            $scope.end = true;
          }
          $scope.loading = false;
          $scope.orders.push.apply($scope.orders, data);
          $scope.start += count;
        }).error(function () {
          $scope.loading = false;
        });
      };

      $scope.loadMore();
    }

    $scope.orderSearch =function()
    {
      if($scope.order.search !=undefined && $scope.order.search.valueOf().trim()!=='' ) {
        order.searchOrder($scope.order.search).success(function(data){
          $scope.orders = data;
        });
      }
      else
      {
        alert('请输入订单号');
      }

    }
    $scope.$watch('order.search',function(){
      if($scope.order.search == undefined || $scope.order.search == '')
      {
        loadOrders();
      }
    });

    $scope.$watch('orderStatus', function (newVal, oldVal) {
      if (newVal !== oldVal) {
        loadOrders();
      }
    });

    $scope.isNaN = isNaN;


  }]);
