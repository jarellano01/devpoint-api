var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true , required: true},
    email     : { type: 'email',  unique: true, required: true },
    passports : { collection: 'Passport', via: 'user' },

    profile: {
      collection:'profile',
      via: 'userId'
    },
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
    }
  }
};

module.exports = User;
