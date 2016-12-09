/**
 * Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string' },

    description : { type: 'longtext' },

    github : { type: 'string' },

    liveDemo: { type: 'string'},

    other : { type: 'string' },

    image: { type: 'string'},

    category: {type: 'string'},

    userId: {
      model: 'user'
    }
  }
};

