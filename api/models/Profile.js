/**
 * Profile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    userId:{
      model: 'user'
    },
    firstName: {type: 'string'},

    lastName: {type: 'string'},
    profileImage: {type: 'string'},
    template: {type: 'string', defaultsTo : "Template1"},

    headline: {type: 'string'},

    description: {type: 'string'},


    fullName: function(){
      return this.firstName + " " + this.lastName;
    },
    toJSON: function() {
      var obj = this.toObject();
      obj.fullName = this.fullName();
      return obj;
    }
  }
};

