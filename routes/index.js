// Require Models
var models = require('../models/model.js');

exports.index = function(req, res) {

	function renderData(data){
		res.render('index', {
			title: "NessaJs",
			locals: {
				data: data,
				active: "home"
			}
		});
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
		title: "NessaJs",
		locals: {
			active: "deep"
		}
	});
};