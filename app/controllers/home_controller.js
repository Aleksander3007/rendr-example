module.exports = {
  index: function(params, callback) {
	  console.log("INFO: controller home.index()");
	  callback();
	// Альтернатива с View's className: callback(null, "home/index");
  }
};
