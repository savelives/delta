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
var validator = require('validator');

module.exports = {

  /**
   * Index Action
   * @return {obj}     Return obj view
   */
  index: function (req, res) {
    res.view();
  },

  /**
   * Contact Action
   * @param  {req} Requistion
   * @param  {res} Response
   */
  contact: function (req, res) {

    var smtpTrans = nodemailer.createTransport('SMTP', {
      service: sails.config.gmail.service,
      auth: {
        user: sails.config.gmail.auth.user,
        pass: sails.config.gmail.auth.pass
      }
    });

    var name = req.body.name,
      email = req.body.email,
      message = req.body.message;

    // TODO: Figure out why the heck I can't pass the sender information to email receiver
    var mailOptions = {
      from: name + ' <' + email + '>',
      to: sails.config.gmail.ukey,
      subject: 'Contato no site SaveLives',
      html: name + '<br>' + email + '<br>' + message
    };

    smtpTrans.sendMail(mailOptions, function (error, response) {

      if (error) {
        console.log(':(' + error);
        console.log(mailOptions);
      } else {
        res.json(response);
      }

    });

  },

  /**
   * Register Action - User registration
   * @param  {req} Requistion
   * @param  {res} Response
   * @param  {Function} next [description]
   */
  register: function (req, res, next) {

    Home.create(req.body, function userCreated(err, user) {
      console.log(req.body);
      if (err) {
        console.log(err);
        // var createFail = ['Fail'];
        req.session.flash = {
          err: err
        }

        return res.redirect('/home/index');
      }

      res.json(user);
    });

  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to HomeController)
   */
  _config: {}


};
