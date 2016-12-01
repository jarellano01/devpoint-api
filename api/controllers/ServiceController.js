/**
 * ServiceController
 *
 * @description :: Server-side logic for managing Services
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function (req, res) {
    var r = req.body;
    User.findOne({username: req.params.username}).exec(function(err, user){
      Service.create({
        name : r.name,
        description : r.link,
        userId: data.id
      }).exec(function(err, data){
        return res.redirect("/user/" + data.username)
      })
    })
  },

  deleteAll: function (req, res) {
    User.findOneByUsername(req.param('username')).exec(function(err, user){
      Service.destroy({userId: user.id }).exec(function (err, data) {
        if (err) {
          return res.negotiate(err);
        }

        return res.redirect("/user/byUsername?username=" + req.param('username'));
      })

    })

  },

  update: function(req, res){
    Service.update({
      id: req.param(id)
    })
  }


};

