/**
 * Contact form
 * @author Lucas <lucas@lucas.ninja>
 */

var contactForm = (function (window, document, undefined) {
  'use strict';

  var contactForm = {};

  contactForm.init = function () {
    this.sendEmail();
  };

  contactForm.sendEmail = function () {

    var form = $('.contact-form');

    $(form).submit(function (event) {
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
        console.log('Yeah!' + response);
      })

      contactAjax.fail(function (data) {
        console.log(':(' + data);
      });

      contactAjax.always(function () {
        console.log('Finish!!!');
      });

      $('.btn-send-message').text('Aguarde...').attr('disabled', 'disabled');
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
          required: '* Digite o seu endereço de e-mail',
          email: '* Digite um e-mail válido!'
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

  };

  return contactForm.init();

})(window, document);