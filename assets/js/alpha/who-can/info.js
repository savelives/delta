/**
 * Who can and who can't donate info
 * @author Lucas <lucas@lucas.ninja>
 */

var info = (function (window, document, undefined) {
  'use strict';

  // Info object
  var info = {};

  info.init = function () {
    this.hoverItems();
  };

  info.hoverItems = function () {
    $('.nal li').hover(function () {
      $(this).find('.nal-title').toggle();
      $(this).find('.wc-info').toggleClass('is-visible-inline-block');
    });
  };

  return info.init();

})(window, document);