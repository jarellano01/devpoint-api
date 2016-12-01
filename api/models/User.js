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
    profileImage: {
      type: 'string'
    },

    headline: {type: 'string'},

    description: {type: 'string'},

    messages: {
      collection: 'message',
      via: 'userId'
    },

    links: {
      collection: 'link',
      via: 'userId'
    },

    services: {
      collection: 'service',
      via: 'userId'
    },

    skills: {
      collection: 'skill',
      via: 'userId'
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

