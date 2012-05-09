// Database Connection
var mongo, db, collection,error;
try{
	mongo = require('mongodb-wrapper');
	db = mongo.db('localhost', 27017, 'test');
    collection = db.collection('test');
}catch(e){
	error = e;
}

exports.getInfo = function(callback) {
	if(!!collection)
		collection.find().toArray(function(err, result) {
			if(!err && !!result)
				callback(null,result);
			else
				callback(err);
		});
	else
		callback(error);
};