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

    var info = {
      name: $('.name-field');
      email: $('.email.field');
    };

    $(form).submit(function (event) {

      $.ajax({
        type: 'POST',
        url: 'user/create',
        data: JSON.stringify(info),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
      }).done(function (response) {
        console.log('Cool!! ' + response);
      }).fails(function (data) {
        console.log('Nooo :( ' + data);
      });

    });

  };


})(window, document);