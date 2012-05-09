// Database Connection
var mongo = require('mongodb-wrapper'),
	db = mongo.db('localhost', 27017, 'test'),
    collection = db.collection('test');

function reStartConection(){
	db.close();
	db = mongo.db('localhost', 27017, 'test');
	collection = db.collection('test');
}

// Database Query
exports.getInfo = function(callback) {

	try{
		
		collection.find().toArray(function(error, result) {
			
			if(!error && !!result) {
				callback(null, result[0]);
			} else {
				callback(error, null);
			}
		
		});
	
	} catch(e) {
		callback(e, null);
	}

	reStartConection();

};