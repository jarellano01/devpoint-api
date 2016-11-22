/**
 * TestController
 *
 * @description :: Server-side logic for managing Testcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  storeSession: function (req, res) {
    req.session.userId = "12345";
    res.json({"id": res.session.userId});
  },

  getSession: function(req, res){
    res.json({"id": req.session.userId})
  }
};

