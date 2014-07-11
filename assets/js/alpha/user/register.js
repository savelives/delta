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

    // var name = $('.name-field').val(),
    //   email = $('.email-field').val()

    // var info = {
    //   "name": name,
    //   "email": email
    // };

    // $(form).submit(function (event) {
    //   event.preventDefault();
    //   $.ajax({
    //     async: false,
    //     type: 'POST',
    //     url: 'user/create',
    //     data: JSON.stringify(info),
    //     contentType: 'application/json; charset=utf-8',
    //     dataType: 'json'
    //   }).done(function (response) {
    //     console.log('Cool!! ' + response);
    //   }).fails(function (data) {
    //     console.log('Nooo :( ' + data);
    //   });

    // });

  };

  return userForm.init();

})(window, document);