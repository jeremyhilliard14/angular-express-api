var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/btb';

var db;
//creat a connection to mongo
MongoClient.connect(mongoUrl, function(error, database){
	db = database;
});

/* GET home page. */
router.get('/search', function(req, res, next){
	db.collection('students').find().toArray(function(error, studentResult){
		res.json(studentResult);
	})
	//res.json("Welcome to Jeremy's server!");
});

router.post('/search', function(req, res, next) {
  	// console.log(req.body.name);
  	//we get nae from the post request(angular)
  	var individualStudent = req.body.name;

  	db.collection('students').find({name: individualStudent}).toArray(function(error, studentResult){

  		if(studentResult.length == 0){
  			db.collection('students').insertOne({
  				name: individualStudent
  			});
  			res.json("Sorry there were no results. We have added " + individualStudent + ' to the database.')
  		}else{
  		res.json(studentResult[0].name + ' is his name.');
  		}
  	});


  	// var dcClass = [
  	// 	'Tristan',
  	// 	'Josh',
  	// 	'Bogdan',
  	// 	'Keith',
  	// 	'Will',
  	// 	'Curtis',
  	// 	'Joe',
  	// 	'Kochan',
  	// 	'Patrick',
  	// 	'Jonathan',
  	// 	'Jeremy'
  	// ];



  	// if(dcClass.indexOf(name) > -1){
  	// 	res.json({message: "Hello, " + name + ", you are a student in this class."});
  	// }else{
  	// 	res.json({message: "You are not a student in this class."});
  	// }



	// res.json({message: "Success"});


});


module.exports = router;
