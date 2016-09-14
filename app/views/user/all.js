var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'user_all_view',
  
  postRender: function() {
	  console.log('INFO: user_all_view.postRender()');
  }
  
});
module.exports.id = 'user/all';
