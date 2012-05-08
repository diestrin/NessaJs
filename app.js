//Module dependencies.
var express = require('express'),
    less = require('less'),
    routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration
app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.compiler({
    src: __dirname + '/public',
    enable: ['less']
  }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.configure('production', function() {
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/view', routes.view);
app.get('/view/deep', routes.deep);

app.listen(8000, function() {
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
