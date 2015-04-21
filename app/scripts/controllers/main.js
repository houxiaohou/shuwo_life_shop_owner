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

    $scope.search = '';

    $scope.status = [
      {label: '全部订单', value: -1},
      {label: '未处理订单', value: 0},
      {label: '已确认订单', value: 1},
      {label: '无效订单', value: 2},
      {label: '已收货', value: 3}
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
        if ($scope.search != '') {
          return;
        }
        if ($scope.end) {
          return;
        }
        $scope.loading = true;
        order.listOrders({
          start: $scope.start,
          count: count,
          status: $scope.orderStatus.value,
          ispickup: 1
        }).success(function (data) {
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

    $scope.orderSearch = function () {
      if ($scope.search != undefined && $scope.search.valueOf().trim() !== '') {
        order.searchOrder($scope.search).success(function (data) {
          $scope.orders = data;
        });
      }
      else {
        alert('请输入订单号');
      }

    };
    $scope.$watch('search', function () {
      if ($scope.search == undefined || $scope.search == '') {
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
angular.module('shuwoShopApp')
  .controller('OutCtrl', ['$scope', 'page', 'order', function ($scope, page, order) {
    page.setFooterNav('out');
    page.showFooter();

    $scope.search = '';
    $scope.status = [
      {label: '全部订单', value: -1},
      {label: '未处理订单', value: 0},
      {label: '已确认订单', value: 1},
      {label: '无效订单', value: 2},
      {label: '已收货', value: 3}
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
        if ($scope.search != '') {
          return;
        }
        if ($scope.end) {
          return;
        }
        $scope.loading = true;
        order.listOrders({
          start: $scope.start,
          count: count,
          status: $scope.orderStatus.value,
          ispickup: 0
        }).success(function (data) {
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

    $scope.orderSearch = function () {
      if ($scope.search != undefined && $scope.search.valueOf().trim() !== '') {
        order.searchOrder($scope.search).success(function (data) {
          $scope.orders = data;
        });
      }
      else {
        alert('请输入订单号');
      }

    };
    $scope.$watch('order.search', function () {
      if ($scope.search == undefined || $scope.search == '') {
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
