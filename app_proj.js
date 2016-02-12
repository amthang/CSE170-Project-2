
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');


var index_proj = require('./routes/index_proj');
var feature_one = require('./routes/feature_one');
var signup = require('./routes/signup');
var pro_land = require('./routes/pro_land');

var search_results = require('./routes/search_results');
var saved_profiles = require('./routes/saved_profiles');
var saved_trips = require('./routes/saved_trips');
var edit_tripdiary = require('./routes/edit_tripdiary');


// Example route
// var user = require('./routes/user');
//var homepage_data = require('./homepage_data.json');

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index_proj.viewData);
app.get('/feature_one', feature_one.main);

app.get('/search_results', search_results.main);
app.get('/signup', signup.main);
app.get('/pro_land', pro_land.main)

app.get('/saved_profiles', saved_profiles.main);
app.get('/saved_trips', saved_trips.main);
app.get('/edit_tripdiary', edit_tripdiary.main);

//app.get('/project/:id', project.projectInfo);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
