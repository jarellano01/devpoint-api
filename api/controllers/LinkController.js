/**
 * LinkController
 *
 * @description :: Server-side logic for managing Links
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function (req, res) {
    var r = req.body;
    User.findOne({username: req.params.username}).exec(function(err, user){
      Link.create({
        name : r.name,
        description : r.description,
        userId: data.id
      }).exec(function(err, data){
        console.log(data.username);
        return res.redirect("/user/" + data.username)
      })
    })
  },
};

