var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'home_index_view',
  
  postRender: function() {
	  console.log('INFO: home_index_view.postRender()');
  }
  
});
module.exports.id = 'home/index';
