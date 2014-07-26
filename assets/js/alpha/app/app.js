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
    this.polymerMediumArrow();
    this.menuItemActive();
    this.scrollActiveMenu();
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
      $('.main-menu li').removeClass('active');
    });
  };

  app.menuItemActive = function () {
    $('.main-menu a').on('click', function () {
      $(this).parent().addClass("active").siblings().removeClass("active");
    });

    $('.smoth-link').on('click', function () {
      console.log($(this).attr('href'));
    });
  };

  app.toggleMenu = function () {
    $('.main-header').on('click', '.menu-button', function () {
      $('.main-menu').slideToggle('slow');
    })
  };

  app.polymerBigArrow = function () {
    var mainHeader = $('.polymer-wc-title');
    mainHeader.each(function (i) {

      $(this).on('click', function (i) {

        // if ($(this).parent().attr('active') == "") {
        //   console.log('Yo ');
        //   $(this).parent().siblings().find('.arrow-big-title').removeClass('arrow-big-title-active');
        // }

        $(this).find('.arrow-big-title').toggleClass('arrow-big-title-active')[i];
      });

    });
  };

  app.polymerMediumArrow = function () {
    var subHeader = $('.polymer-sub-header');
    subHeader.each(function (i) {

      $(this).on('click', function (i) {
        $(this).find('.arrow-medium-title').toggleClass('arrow-medium-title-active')[i];
      });

    });
  };

  app.scrollActiveMenu = function () {
    $('.sierra-container').scrollNav({
      sections: '.page-name',
      subSections: false,
      showHeadline: false,
      sectionElem: 'section',
      showTopLink: false,
      className: 'main-menu',
      insertTarget: '.main-header .wrap',
      insertLocation: 'appendTo',
      fixedMargin: 0,
      scrollOffset: 140,
    });
  };

  return app.init();

})(window, document);