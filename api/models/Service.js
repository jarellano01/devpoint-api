/**
 * Service.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string', required: true },

    description : { type: 'string', required: true },

    icon : { type: 'string'},

    deleteLink: function(){
      return  "/service/delete/" + this.id;
    },
    userId: {
      model: 'user'
    },
    toJSON: function() {
      var obj = this.toObject();
      obj.deleteLink = this.deleteLink();
      return obj;
    }
  }

};

