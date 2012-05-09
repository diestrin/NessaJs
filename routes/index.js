// Require Models
var models = require('../models/model.js');

exports.index = function(req, res) {

	function renderData(error, data){
		if(!!data) {

			res.render('index', {
				title: "NessaJs",
				locals: {
					data: data.app,
					active: "home"
				}
			});
			
		} else {
			errorView(req, res, error);
		}
	}

	models.getInfo(renderData);

};

exports.view = function(req, res) {
	res.render('view', {
		title: "NessaJs View",
		locals: {
			active: "view"
		}
	});
};

exports.deep = function(req, res) {
	res.render('deep', {
		title: "NessaJs Deep View",
		locals: {
			active: "deep"
		}
	});
};

errorView = function(req, res, error){
	res.render('error', {
		title: "NessaJs Error",
		locals: {
			error: error,
			active: "error"
		}
	});
};