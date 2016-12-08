/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');

module.exports = {

  attributes: {

    firstName: {type: 'string', required: true},

    lastName: {type: 'string', required: true},

    email: {type: 'string',required: true},

    profileImage: {type: 'string'},

    password: {
      type: 'string',
      minLength: 6,
      required: true
    },

    username: {
      type: 'string',
      unique: true,
      required: true
    },

    headline: {type: 'string'},

    description: {type: 'string'},

    message: {
      collection: 'message',
      via: 'userId'
    },

    link: {
      collection: 'link',
      via: 'userId'
    },

    service: {
      collection: 'service',
      via: 'userId'
    },

    project: {
      collection: 'project',
      via: 'userId'
    },
    skill: {
      collection: 'skill',
      via: 'userId'
    },

    fullName: function(){
      return this.firstName + " " + this.lastName;
    },
    toJSON: function() {
      var obj = this.toObject();
      obj.fullName = this.fullName();
      return obj;
    }
  },

  beforeCreate: function (user, cb) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        } else {
          user.password = hash;
          cb();
        }
      });
    });
  }
};

