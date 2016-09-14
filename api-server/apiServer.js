

// Инициализация API.
module.exports.init = function (app) {
	
	app.get('/api-test', function (req, res) {
		res.setHeader('Content-Type', 'application/json; charset=utf-8');
		res.send(
			{
				"status" : "OK",
			}
		);
	});
	
	app.get('/api-users/:userId', function (req, res) {
		console.log("INFO: /api-user/:userId");
		res.setHeader('Content-Type', 'application/json; charset=utf-8');
		res.send(
			{
				"id" : req.params.userId,
				"name": "John",
				"country" : "USA",
			}
		);
	});
	
	app.get('/api-users', function (req, res) {
		console.log("INFO: /api-user/all");
		res.setHeader('Content-Type', 'application/json; charset=utf-8');
		res.send(
			[
				{
					"id" : 1,
					"name": "John",
					"country" : "USA",
				},
				{
					"id" : 2,
					"name": "Tom",
					"country" : "Germany",
				}
			]
		);
	});
}


