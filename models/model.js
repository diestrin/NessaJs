// Database Connection
var mongo = require('mongodb-wrapper'),
	db = mongo.db('localhost', 27017, 'test'),
    collection = db.collection('test');

function reStartConnection(){
	db.close();
	db = mongo.db('localhost', 27017, 'test');
	collection = db.collection('test');
}

// Database Query
exports.getInfo = function(selector, callback) {
	selector = selector || '';
	try{
		
		collection.find(selector).toArray(function(error, result) {
			
			if(!error && !!result) {
				callback(null, result[0]);
			} else {
				callback(error, null);
				reStartConnection();
			}
		
		});
	
	} catch(e) {
		callback(e, null);
		reStartConnection();
	}
};