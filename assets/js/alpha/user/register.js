/**
 * Create user form
 * @author Lucas <lucas@lucas.ninja>
 */

var userForm = (function (window, document, undefined) {
  'use strict';

  var userForm = {};

  userForm.init = function () {
    this.register();
    this.refresh();
  };

  userForm.register = function () {

    var form = $('.register-user-form');

    this.validate(form);

    $(form).submit(function (event) {
      NProgress.start();
      event.preventDefault();

      var name = $('.name-field').val(),
        email = $('.email-field').val()

      var info = {
        "name": name,
        "email": email
      };

      // Ajax call
      var ajaxCall = $.ajax({
        type: 'POST',
        url: 'home/register',
        data: JSON.stringify(info),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
      });

      ajaxCall.done(function () {
        $(form).addClass('is-hidden');
        $('.initiative-title-sub-title').addClass('is-hidden');
        $('.register-success').removeClass('is-hidden');
      });

      ajaxCall.fail(function (err) {
        // alert('Ops, ocorreu algum erro inesperado! Por favor, tente novamente!');
        NProgress.done();
      });

      ajaxCall.always(function () {
        console.log('Finish!!');
        NProgress.done();
      });


    });

  };

  userForm.validate = function (form) {

    form.validate({
      errorLabelContainer: $('.errors-container'),
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: '* Digite o seu nome.'
        },
        email: {
          required: '* Digite o seu endereço de e-mail.',
          email: '* Digite um e-mail válido.'
        }
      },
      success: function (element) {
        element.text('');
      }
    });
  };

  userForm.refresh = function () {
    var form = $('.register-user-form');
    var successContent = $('.register-success');
    var refreshMe = $('.register-success p');

    $(successContent).on('click', refreshMe, function () {
      successContent.addClass('is-hidden');
      form.removeClass('is-hidden');
      $('.initiative-title-sub-title').removeClass('is-hidden');
      $('.name-field').val('');
      $('.email-field').val('');
    });

  };

  return userForm.init();

})(window, document);