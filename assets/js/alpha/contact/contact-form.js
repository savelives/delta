/**
 * Contact form
 * @author Lucas <lucas@lucas.ninja>
 */
var $ = require('jquery');

var contactForm = (function (window, document, undefined) {

  var contactForm = {},

  contactForm.init = function () {

  },

  contactForm.sendEmail = function () {

    var name = $('.contact-name-field').val(),
      email = $('.contact-email-field').val(),
      message = $('.message-field').val(),
      info = {'name': name, 'email': email, 'message': message};

    $('.btn-send-message').on('click', function () {
      $.ajax({
        type: 'POST',
        url: 'home/contact',
        data: JSON.stringify(info),
        contentType:"application/json; charset=utf-8",
        dataType: 'json'
      }).done(function () {
        alert('Cool!');
      });
    });

  }

})(window, document);