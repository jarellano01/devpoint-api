/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var axios = require('axios');
module.exports = {
  /**
   * `UsersController.all()`
   */
  all: function (req, res) {
    User.find().exec(function (err, data) {
      return res.json(data);
    })
  },

  register: function (req, res) {
    var r = req.body;
    User.create({
      username: r.username,
      email: r.email,
      firstName: r.firstName,
      lastName: r.lastName,
      password: r.password
    })
      .exec(function (err, data) {
        if (err) {
          return res.serverError(err);
        }
        res.json(data);
      })
  },

  update: function (req, res) {
    var params = req.allParams();
    var username = req.param('username');
    delete params.username;
    User.update({username: username}, params).exec(function (err, data) {
      if (err) {
        return res.serverError(err);
      }
      res.send(data);
    })
  },

  find: function (req, res) {
    var params = req.allParams();
    User.findOne(params)
      .populate("link")
      .populate('message')
      .populate('skill')
      .populate('service')
      .populate('project')
      .exec(function (err, data) {
        if (err) {
          return res.serverError(err);
        }
        if(!data) res.send('User does not exist');
        return res.json(data);
      });
  },



  deleteAll: function (req, res) {
    User.destroy({}).exec(function (err, data) {
      if (err) {
        return res.negotiate(err);
      }
      sails.log('All users have been deleted.');
      return res.json({"message": "all users have been deleted!"});
    })
  },


  /**
   * `UsersController.byId()`
   */
  byUserName: function (req, res) {
    User
      .findOneByUsername(req.param('username'))
      .populate('services')
      .populate('messages')
      .populate('skills')
      .populate('messages')
      .populate('links')
      .exec(function (err, data) {
        return res.json(data);
      })
  },

  delete: function (req, res) {
    User.destroy({
      username: req.param('username')
    }).exec(function (err, data) {
      if (err) {
        return res.serverError(err);
      }
      return res.json({"message": 'User has been deleted.'});
    })
  },

  uploadImage: function(req, res){
    var dataPhoto = req.param("dataPhoto");
    Cloudinary.upload(dataPhoto ,function (result) {
      res.send(result);
    });
  }

};

