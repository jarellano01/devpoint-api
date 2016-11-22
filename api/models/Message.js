/**
 * Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string' },

    username : {
      type: 'string',
      unique: true
    },

    phone : { type: 'string' },

    email : { type: 'string' },

    service: { type: 'string'},

    subject : { type: 'string' },

    message : { type: 'longtext' },

    userId: {
      model: 'user'
    }
  }
};

