var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'user_index_view',
  
  postRender: function() {
	  console.log('INFO: user_index_view.postRender()');
  }
  
});
module.exports.id = 'user/index';