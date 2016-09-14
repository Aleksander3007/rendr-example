var Base = require('./base');

module.exports = Base.extend({
  url: '/api-users/:userId',
  idAttribute: 'userId'
});
module.exports.id = 'User';