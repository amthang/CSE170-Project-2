var data = require('../travel_diary.json');
var brit = require('../travel_diary_brittany.json');
var wine = require('../travel_diary_wine.json');

exports.main = function(req, res){
  	res.render('travel_diary')
}

exports.brit_main = function(req, res){
	res.render('travel_diary', brit);
}

exports.wine_main = function(req, res){
	res.render('travel_diary', wine);
}

exports.brit_signedin = function(req, res){
	res.render('travel_diary_signedin', brit);
}

exports.wine_signedin = function(req, res){
	res.render('travel_diary_signedin', wine);
}

exports.choose_diary = function(req, res){
	if(req != null){
		var trip_name = req.body.trip_name;
		var data_return = "";
		
	}

	// for(var i = 0; i < data["title"].length; i++){
	// 	if(data["title"][i].trip_name == trip_name){
	// 		data_return = data["trip_name"];
	// 		res.render('travel_diary', data_return);
	// 	}
	// }


		if(data["title"][0].trip_name == trip_name){
			res.render('travel_diary', data);
		}

		else if(data["title"][0].trip_name == trip_name){
			res.render('travel_diary', data);
		}

		else
		{
			res.render('index_proj');
		}
}