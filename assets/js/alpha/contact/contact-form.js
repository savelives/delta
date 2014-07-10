/**
 * Contact form
 * @author Lucas <lucas@lucas.ninja>
 */
var $ = require('jquery');

var contactForm = (function (window, document, undefined) {
  'use strict';

  var contactForm = {};

  contactForm.init = function () {
    this.sendEmail();
  };

  contactForm.sendEmail = function () {

    var name = $('.contact-name-field').val(),
      email = $('.contact-email-field').val(),
      message = $('.message-field').val();

    var info = {
      "name": $('.contact-name-field').val(),
      "email": $('.contact-email-field').val(),
      "message": $('.message-field').val()
    };

    var form = $('.contact-form');
    var formData = $(form).serialize();

    $(form).submit(function (event) {
      console.log(formData + ' XD');
      event.preventDefault();
      $.ajax({
        type: 'POST',
        url: 'home/contact',
        data: formData,
        contentType:"application/json; charset=utf-8",
        dataType: 'json'
      }).done(function (response) {
        console.log('Yeah!' + response);
        console.log(info);
      }).fail(function (data) {
        console.log(':(' + data);
        console.log(info);
      });
    });

  };

  return contactForm.init();

})(window, document);