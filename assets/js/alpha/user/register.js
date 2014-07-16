/**
 * Create user form
 * @author Lucas <lucas@lucas.ninja>
 */

var userForm = (function (window, document, undefined) {
  'use strict';

  var userForm = {};

  userForm.init = function () {
    this.register();
  };

  userForm.register = function () {

    var form = $('.register-user-form');

    this.validate(form);

    $(form).submit(function (event) {
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
        console.log('Cool!!');
      });

      ajaxCall.fail(function (err) {
        console.log('Noooo!! ' + err);
      });

      ajaxCall.always(function () {
        console.log('Finish!!');
      });


    });

  };

  userForm.validate = function (form) {

    // $('.btn-register-now').addClass('btn-disabled').attr('disabled', 'disabled');
    // $('.btn-register-now').removeClass('btn-disabled').attr('disabled', false);

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
          required: 'Digite seu nome.'
        },
        email: {
          required: 'Digite seu e-mail',
          email: 'Digite um e-mail válido!'
        }
      },
      success: function (element) {
        element.text('');
      }
    });
  };

  return userForm.init();

})(window, document);