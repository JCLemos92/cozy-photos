<<<<<<< HEAD
// Generated by CoffeeScript 1.9.2
=======
// Generated by CoffeeScript 1.9.0
>>>>>>> ff5ff08aa15bfba8bafc9448bab5371c8940b93c
var Contact, async, fs;

Contact = require('../models/contact');

async = require('async');

fs = require('fs');

module.exports.list = function(req, res, next) {
  return Contact.all((function(_this) {
    return function(err, contacts) {
      if (err) {
        return next(err);
      } else if (!contacts) {
        err = new Error("Contacts not found");
        err.status = 404;
        return next(err);
      } else {
        return res.send(contacts);
      }
    };
  })(this));
};
