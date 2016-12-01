/**
 * ServiceController
 *
 * @description :: Server-side logic for managing Services
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var model = 'services';

module.exports = {
  create: function (req, res) {
    var r = req.body;
    Model = Service;
    User.findOne({username: req.params.username}).exec(function (err, user) {
      Model.create({
        name: r.name,
        description: r.description,
        userId: data.id
      }).exec(function (err, data) {
        return res.redirect("/user/" + data.username)
      })
    })
  },
  find: function (req, res) {
    User.findOne({
      username: req.params.username
    })
      .populate(model)
      .exec(function (err, user) {
        res.json(user[model]);
      })
  },

  findById: function (req, res) {
    Service.findOne({id: req.params.id}).exec(function (err, data) {
      res.json(data);
    })

  },

  update: function (req, res) {
    var r = req.body;
    Service.update({
      id: req.params.id
    }, {
      name: r.name,
      description: r.description,
    })
      .exec(function (err, data) {
        res.json(data);
      })
  }
};

