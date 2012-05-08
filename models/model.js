// Database Connection
var mongo = require('mongodb-wrapper'),
	db = mongo.db('localhost', 27017, 'test'),
    collection = db.collection('test');

exports.getInfo = function(callback) {
	
	collection.find().toArray(function(err, result) {
		callback(result[0].app);
	});

};