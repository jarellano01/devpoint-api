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
    User.findOne({username: req.params.username}).exec(function (err, user) {
      Service.create({
        name: r.name,
        description: r.description,
        userId: user.id
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
    sails.models['service'].findOne({id: req.params.id}).exec(function (err, data) {
      res.json(data);
    })

  },

  update: function (req, res) {
    var r = req.body;
    var params = req.allParams();
    var itemId = req.params.id;
    delete params.id;
    delete params.item;
    console.log(params);
    sails.models[req.param('item')].update({
      id: itemId
    }, params)
      .exec(function (err, data) {
        res.redirect("/user/" + data[0].userId);
        //res.json(data);
      })
  },

  delete: function(req, res){
    var r = req.body;
    var itemId = req.params.id;

    sails.models[req.param('item')].find({id: itemId}).exec(function(err, data){
      sails.models[req.param('item')].destroy({id: itemId}).exec(function () {
        res.redirect("/user/" + data[0].userId);
      })
    });
  }


};

