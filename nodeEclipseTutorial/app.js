
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , fs   = require('fs')
  , path = require('path');


var app = express();


var config = {
		key:  fs.readFileSync('./ssl/michaels-key.pem'),
		cert: fs.readFileSync('./ssl/michaels.crt')
}

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', routes.index);
app.get('/users', user.list);

var contact = require('./routes/contact');
app.get('/contact', contact.contact);

var about = require('./routes/about');
app.get('/about', about.about);
 
var resume = require('./routes/resume');
app.get('/resume', resume.resume);

var project = require('./routes/project');
app.get('/project', project.project);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});