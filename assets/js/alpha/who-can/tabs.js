/**
 * Tabs system
 * @author Lucas <lucas@lucas.ninja>
 */

var tabs = (function (window, document, undefined) {
  'use strict';

  // Tabs object
  var tabs = {};

  tabs.init = function () {
    this.switchTabs();
  };

  tabs.switchTabs = function () {
    var tabsContent = $('.tabs-content section');
    $('.can-cant li').on('click', function (e) {
      e.preventDefault();
      $(this).addClass('tab-current').siblings().removeClass('tab-current');
      tabsContent.removeClass('tab-content-current');
      $(tabsContent[$(this).data('index') - 1]).addClass('tab-content-current animated fadeIn');
    });
  };

  return tabs.init();

})(window, document);