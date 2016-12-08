/**
 * ServiceController
 *
 * @description :: Server-side logic for managing Services
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var model = 'services';


module.exports = {

  find: function (req, res) {
    var r = req.params;
    User.findOne({username: r.username}).populate(r.item).exec(function (err, data) {
      if (err) {
        return res.serverError(err);
      }
      return res.json(data[r.item]);
    })
  },
  createUpdate: function (req, res) {
    var r = req.params;
    var params = req.allParams();
    delete params.username;
    delete params.item;
    var itemId = req.param('id');

    if(itemId){
      sails.models[req.param('item')].update({
        id: itemId
      }, params)
        .exec(function (err, data) {
          return res.redirect("/user?id=" + data[0].userId);
          //res.json(data);
        })
    }
    else{
      User.findOne({username: r.username}).populate(r.item).exec(function (err, data) {
        if (err) {
          return res.serverError(err);
        }

        data[r.item].add(params);
        data.save(function (err) {
          res.redirect('/user/' + data.username)
        });
      })
    }
  },
  delete: function(req, res){
    var r = req.body;
    var itemId = req.param('id');

    sails.models[req.param('item')].find({id: itemId}).exec(function(err, data){
      if (err) {
        return res.serverError(err);
      }
      if(!data) res.send("Item was not found");

      sails.models[req.param('item')].destroy({id: itemId}).exec(function (err) {
        if (err) {
          return res.serverError(err);
        }
        return res.send('Item has been deleted');
      })
    });
  }


};

