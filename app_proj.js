
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
// user added pictures
var addPicture = require('./routes/addPicture');

var search_results = require('./routes/search_results');
var saved_profiles = require('./routes/saved_profiles');
var saved_trips = require('./routes/saved_trips');

//var edit_tripdiary = require('./routes/edit_tripdiary');
var travel_diary = require('./routes/travel_diary');

var edit_tripdiary = require('./routes/edit_tripdiary');

var signin = require('./routes/signin');
var create_account = require('./routes/create_account');
var signout = require('./routes/signout');
var forgot_pw = require('./routes/forgot_pw');
var confirm_account = require('./routes/confirm_account');
var support_help = require('./routes/support_help');
var login = require('./routes/login');
var user_homepage = require('./routes/user_homepage');
var support_help_user = require('./routes/support_help');
var terms = require('./routes/terms_conditions');
var public_profile = require('./routes/public_profile');
var user_public_profile = require('./routes/user_public_profile');

var AnjelicaThang = require('./routes/saved_profiles_routes/AnjelicaThang.js');
var StevenDuong = require('./routes/saved_profiles_routes/StevenDuong.js');
var HelenCheng = require('./routes/saved_profiles_routes/HelenCheng.js');
var JoelKrejmas = require('./routes/saved_profiles_routes/JoelKrejmas');
var HarryPotter = require('./routes/saved_profiles_routes/HarryPotter');
var RonWeasley = require('./routes/saved_profiles_routes/RonWeasley');
var HermioneGranger = require('./routes/saved_profiles_routes/HermioneGranger');
var SeverusSnape = require('./routes/saved_profiles_routes/SeverusSnape');
var AlbusDumbledore = require('./routes/saved_profiles_routes/AlbusDumbledore');

// Example route
// var user = require('./routes/user');
//var homepage_data = require('./homepage_data.json');

var app_proj = express();


// all environments
app_proj.set('port', process.env.PORT || 3000);
app_proj.set('views', path.join(__dirname, 'views'));
app_proj.engine('handlebars', handlebars());
app_proj.set('view engine', 'handlebars');
app_proj.use(express.favicon());
app_proj.use(express.logger('dev'));
app_proj.use(express.json());
app_proj.use(express.urlencoded());
app_proj.use(express.methodOverride());
app_proj.use(express.cookieParser('Intro HCI secret key'));
app_proj.use(express.session());
app_proj.use(app_proj.router);
app_proj.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app_proj.get('env')) {
  app_proj.use(express.errorHandler());
}

// Add routes here
app_proj.get('/', index_proj.viewData);
app_proj.get('/index_proj', index_proj.viewData);
app_proj.get('/feature_one', feature_one.main);

app_proj.get('/search_results', search_results.main);
app_proj.get('/signup', signup.main);
app_proj.get('/pro_land', pro_land.main)

app_proj.get('/saved_profiles', saved_profiles.main);
app_proj.get('/saved_trips', saved_trips.main);

app_proj.get('/travel_diary', travel_diary.main);

app_proj.get('/edit_tripdiary', edit_tripdiary.edit_tripdiary);

app_proj.get('/signin', signin.main);
app_proj.get('/create_account', create_account.main);
app_proj.get('/signout', signout.main);
app_proj.get('/confirm_account', confirm_account.main);
app_proj.get('/forgot_pw', forgot_pw.main);
app_proj.get('/support_help', support_help.main);
app_proj.get('/user_homepage', user_homepage.main);
app_proj.get('/support_help_user', support_help.main_user);
app_proj.get('/terms_conditions', terms.main);
app_proj.get('/public_profile', public_profile.main);
app_proj.get('/user_public_profile', user_public_profile.main);
app_proj.get('/travel_diary_brittany', travel_diary.brit_main);
app_proj.get('/travel_diary_wine', travel_diary.wine_main);
app_proj.get('/travel_diary_signedin', travel_diary.brit_signedin);
app_proj.get('/travel_diary_signedin', travel_diary.wine_signedin);

//app_proj.get('/project/:id', project.projectInfo);
// Example route
// app_proj.get('/users', user.list);

app_proj.post('/login', login.view);
app_proj.post('/pro_land', pro_land.checkLogin);
app_proj.post('/search_results', search_results.checkSearch);
app_proj.post('/search', search_results.checkSearch);

// addPicture.js
app_proj.get('/addPicture', addPicture.addPicture);

app_proj.get('/AnjelicaThang', AnjelicaThang.main);
app_proj.get('/StevenDuong', StevenDuong.main);
app_proj.get('/HelenCheng', HelenCheng.main);
app_proj.get('/JoelKrejmas', JoelKrejmas.main);
app_proj.get('/HarryPotter', HarryPotter.main);
app_proj.get('/RonWeasley', RonWeasley.main);
app_proj.get('/HermioneGranger', HermioneGranger.main);
app_proj.get('/SeverusSnape', SeverusSnape.main);
app_proj.get('/AlbusDumbledore', AlbusDumbledore.main);

http.createServer(app_proj).listen(app_proj.get('port'), function(){
  console.log('Express app_proj listening on port ' + app_proj.get('port'));
});
