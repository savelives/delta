/**
 * Site stuff
 * @author Lucas <lucas@lucas.ninja>
 */

var app = (function (window, document, undefined) {

  'use strict';

  var app = {};

  app.init = function () {
    this.smothScroll();
    this.backToTop();
    this.toggleMenu();
    this.polymerBigArrow();
  };

  // SmothScroll
  app.smothScroll = function () {
    $('.smoth-link').click(function () {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 20
          }, 800);
          return false
        }
      }
    });
  };

  app.backToTop = function () {
    $('.logo-link').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    });
  };

  app.toggleMenu = function () {
    $('.toggle-menu').on('click', function () {
      $('.main-menu').slideToggle('slow');
    })
  };

  app.polymerBigArrow = function () {
    var mainHeader = $('.polymer-main-title');
    mainHeader.on('click', function () {

      mainHeader.find('.arrow-big-title').toggleClass('arrow-big-title-active');

    });
  };

  return app.init();

})(window, document);