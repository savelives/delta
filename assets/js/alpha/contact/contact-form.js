/**
 * Contact form
 * @author Lucas <lucas@lucas.ninja>
 */

var contactForm = (function (window, document, undefined) {
  'use strict';

  var contactForm = {};

  contactForm.init = function () {
    this.sendEmail();
    this.refresh();
  };

  contactForm.sendEmail = function () {

    var form = $('.contact-form');

    this.validate(form);

    $(form).submit(function (event) {
      NProgress.start();
      event.preventDefault();

      var name = $('.contact-name-field').val(),
        email = $('.contact-email-field').val(),
        message = $('.message-field').val();

      var info = {
        "name": name,
        "email": email,
        "message": message
      };

      var contactAjax = $.ajax({
        type: 'POST',
        url: 'home/contact',
        data: JSON.stringify(info),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
      });

      contactAjax.done(function (response) {
        $(form).addClass('is-hidden');
        $('.invite-to-contact').addClass('is-hidden');
        $('.contact-success').removeClass('is-hidden');
      })

      contactAjax.fail(function (data) {
        NProgress.done();
      });

      contactAjax.always(function () {
        console.log('Finish!!!');
        NProgress.done();
      });
    });

  };

  contactForm.validate = function (form) {
    form.validate({
      errorLabelContainer: $('.contact-errors-container'),
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        }
      },
      messages: {
        name: {
          required: '* Digite o seu nome.'
        },
        email: {
          required: '* Digite o seu endereço de e-mail.',
          email: '* Digite um e-mail válido.'
        },
        message: {
          required: '* Digite a sua mensagem.'
        }
      },
      success: function (element) {
        element.text('');
      }
    });
  };

  contactForm.refresh = function () {
    var form = $('.contact-form');
    var successContent = $('.contact-success');
    var refreshMe = $('.contact-success p');

    $(successContent).on('click', refreshMe, function () {
      successContent.addClass('is-hidden');
      form.removeClass('is-hidden');
      $('.invite-to-contact').removeClass('is-hidden');
      $('.contact-name-field').val('');
      $('.contact-email-field').val('');
      $('.message-field').val('');
    });
  };

  return contactForm.init();

})(window, document);