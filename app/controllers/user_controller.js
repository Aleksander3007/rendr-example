module.exports = {
	"index": function(params, callback) {
		console.log("INFO: user_controller.index()");
		var spec = {
				model: {model: 'User', 
						params: params}
		};
		
		this.app.fetch(spec, function(err, result) {
			callback(err, "user/index", result);
		});
	},
	
	"all": function(params, callback) {
		console.log("INFO: user_controller.all()");
		var spec = {
			collection: {collection: 'Users', 
						params: params}
		};
		
		this.app.fetch(spec, function(err, result) {
			callback(err, "user/all", result);
		});
	}
};