'use strict';

/**
 * @ngdoc overview
 * @name shuwoShopApp
 * @description
 * # shuwoShopApp
 *
 * Main module of the application.
 */
angular
  .module('shuwoShopApp', [
    'ngCookies',
    'frapontillo.bootstrap-switch',
    'ui.router',
    'infinite-scroll',
    'services.config'
  ])
  .config(['$urlRouterProvider', '$stateProvider', '$httpProvider', 'configuration',
    function ($urlRouterProvider, $stateProvider, $httpProvider, configuration) {
      var interceptor = ['$rootScope', '$q', '$injector',
        function (scope, $q, $injector) {
          function success(response) {
            return response;
          }

          function error(response) {
            var status = response.status;
            if (status == 401) {
              alert('用户身份不正确，请重新进入');
              return;
            }
            return $q.reject(response);
          }

          return function (promise) {
            return promise.then(success, error);
          }
        }];
      $httpProvider.responseInterceptors.push(interceptor);
      $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
      $httpProvider.defaults.transformRequest = function (data) {
        if (data === undefined) {
          return data;
        }
        return $.param(data);
      };
      $urlRouterProvider.otherwise('/');
      var templateBase = configuration.templateBase;
      $stateProvider
        .state('shuwoShop', {
          abstract: true,
          url: '',
          templateUrl: templateBase + 'views/base.html'
        })
        .state('shuwoShop.main', {
          url: '/',
          templateUrl: templateBase + 'views/main.html',
          controller: 'MainCtrl'
        })
        .state('shuwoShop.out', {
          url: '/out',
          templateUrl: templateBase + 'views/main.html',
          controller: 'OutCtrl'
        })
        .state('shuwoShop.order', {
          abstract: true,
          url: '/order',
          template: '<ui-view />'
        })
        .state('shuwoShop.order.detail', {
          url: '/{id:[0-9]{1,20}}',
          templateUrl: templateBase + 'views/order.detail.html',
          controller: 'OrderDetailCtrl'
        })
        .state('shuwoShop.order.invalid', {
          url: '/{id:[0-9]{1,20}}/invalid',
          templateUrl: templateBase + 'views/order.invalid.html',
          controller: 'OrderInvalidCtrl'
        })
        .state('shuwoShop.shop', {
          url: '/shop',
          templateUrl: templateBase + 'views/shop.html',
          controller: 'ShopCtrl'
        })
        .state('shuwoShop.product', {
          abstract: true,
          url: '/product',
          template: '<ui-view />'
        })
        .state('shuwoShop.product.list', {
          url: '',
          templateUrl: templateBase + 'views/product.list.html',
          controller: 'ProductCtrl'
        })
        .state('shuwoShop.product.detail', {
          url: '/{id:[0-9]{1,10}}',
          templateUrl: templateBase + 'views/product.detail.html',
          controller: 'ProductDetailCtrl'
        });
    }])
  .run(['$http', '$cookies', function ($http, $cookies) {
    var token = $cookies.stoken;
    token = 'l+KS4WB6WILQBPSP5z6Z9HqxXTfXlXYhhnm+VFzXxztRm/e2fwJMZUmIpLhbsrO3';
    $http.defaults.headers.common['Authorization'] = token;
    FastClick.attach(document.body);
  }]);
