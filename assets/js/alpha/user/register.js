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

    $(form).submit(function (event) {
      event.preventDefault();

      var name = $('.name-field').val(),
        email = $('.email-field').val()

      var info = {
        "name": name,
        "email": email
      };

      $.ajax({
        type: 'POST',
        url: 'user/create',
        data: JSON.stringify(info),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
      }).done(function (response) {
        console.log('Cool!! ' + response);
      }).fail(function (data) {
        console.log('Nooo :( ' + data);
      });

      console.log(info);

    });

  };

  return userForm.init();

})(window, document);