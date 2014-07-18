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
    this.carrouselInfo();
  };

  info.hoverItems = function () {
    $('.nal li').hover(function () {
      $(this).find('.nal-title').toggle();
      $(this).find('.wc-info').toggleClass('is-visible-inline-block');
    });
  };

  info.carrouselInfo = function () {
    $('.np-arrow').on('click', function () {
      $('.wm-info:visible').hide().siblings('.wm-info').show().addClass('animated flip');
    });
  };

  return info.init();

})(window, document);