/**
 * HomeController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var nodemailer = require('nodemailer');

module.exports = {

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to HomeController)
   */
  _config: {},

  contact: function (req, res) {

    var name = req.body.name,
      email = req.body.email,
      message = req.body.message;

    var smtpTrans = nodemailer.createTransport('SMTP', {
      service: sails.config.gmail.service,
      auth: {
        user: sails.config.gmail.auth.user,
        pass: sails.config.gmail.auth.pass
      }
    });

    // TODO: Figure out why the heck I can't pass the sender information to email receiver
    var mailOptions = {
      from: name + '<' + email + '>',
      to: sails.config.gmail.ukey,
      subject: 'Contato no site SaveLives',
      html: name + '<br>' + email + '<br>' + message
    };

    smtpTrans.sendMail(mailOptions, function (error, response) {

      if (error) {
        console.log(':(' + error);
        console.log(mailOptions);
      } else {
        res.redirect('/obrigado-pelo-contato');
      }

    });

  }


};
