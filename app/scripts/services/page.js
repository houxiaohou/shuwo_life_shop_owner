'use strict';

/**
 * @ngdoc service
 * @name shuwoApp.page
 * @description
 * # page
 * Service in the shuwoApp.
 */
angular.module('shuwoShopApp')
  .service('page', function page() {
    var footerNav = 'order';
    var show = true;
    return {
      setFooterNav: function (newNav) {
        footerNav = newNav;
      },
      getFooterNav: function () {
        return footerNav;
      },
      hideFooter: function () {
        show = false;
      },
      showFooter: function () {
        show = true;
      },
      hasFooter: function () {
        return show;
      }
    }
  });
