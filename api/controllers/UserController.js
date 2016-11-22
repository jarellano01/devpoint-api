/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `UsersController.all()`
   */
  all: function (req, res) {
    User.find().exec(function (err, data) {
      return res.json(data);
    })
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


  /**
   * `UsersController.create()`
   */
  // create: function (req, res) {
  //   var b = req.body;
  //
  //   User.create({
  //     firstName: b.firstName,
  //
  //     lastName: b.lastName,
  //
  //     email: b.email,
  //
  //     password: b.password,
  //
  //     username: b.username,
  //
  //     headline: b.headline,
  //
  //     description: b.description
  //   }).exec(function (err, data) {
  //     if (err) {
  //       return res.serverError(err);
  //     }
  //     res.redirect('/user/byUserName?username=' + data.username)
  //   })
  // },


  /**
   * `UsersController.update()`
   */
  update: function (req, res) {
    var b = req.body;

    User.update({
        username: req.param("username")
      },
      {
        firstName: b.firstName,

        lastName: b.lastName,

        email: b.email,

        password: b.password,

        username: b.username,

        headline: b.headline,

        description: b.description
      })
      .exec(function (err, data) {
        if(err){
          return res.serverError(err);
        }
        return res.json(data);
      })
  },


  /**
   * `UsersController.delete()`
   */
  delete: function (req, res) {
    User.destroy({
      username: req.param('username')
    }).exec(function (err, data) {
      if (err) {
        return res.negotiate(err);
      }
      return res.json({"message": 'User has been deleted.'});

    })
  }
};

