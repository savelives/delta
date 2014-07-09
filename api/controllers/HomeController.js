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
    var params = req.params.all();
    // console.log(params);
    // res.redirect('/');

    smtpTrans = nodemailer.createTransport('SMTP', {
      service: "Gmail",
      auth: {
          user: "gmail.user@gmail.com",
          pass: "userpass"
      }
    });

    mailOpts = {
      from: params.name + '&lt;' + params.email + '&gt;',
      to: 'contato@saveliv.es',
      subject: 'Contato no site SaveLives',
      text: params.message
    };

    smtpTrans.sendMail(mailOpts, function (error, response) {

      if (error) {
        console.log(':(' + error);
      } else {
        res.redirect('/');
      }

    });

  }


};
