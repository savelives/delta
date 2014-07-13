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
      }).done(function () {
        console.log('Cool!!');
      }).fail(function () {
        console.log('Nooo :( ');
      }).always(function () {
        console.log('Finish!');
      });

    });

  };

  return userForm.init();

})(window, document);