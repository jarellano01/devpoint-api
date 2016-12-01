/**
 * LinkController
 *
 * @description :: Server-side logic for managing Links
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var model = 'links';

module.exports = {
  create: function (req, res) {
    var r = req.body;

    User.findOne({username: req.params.username}).exec(function (err, user) {
      Link.create({
        name: r.name,
        link: r.link,
        userId: user.id
      }).exec(function (err, data) {
        return res.redirect("/user/" + user.id);
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
    Link.findOne({id: req.params.id}).exec(function (err, data) {
      res.json(data);
    })

  },

  update: function (req, res) {
    var r = req.body;
    Link.update({
      id: req.params.id
    }, {
      name: r.name,
      link : r.link
    })
      .exec(function (err, data) {
        // res.redirect("/user/" + data.userId);
        res.json(data);
      })
  }
};
