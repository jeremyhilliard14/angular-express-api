var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/search', function(req, res, next) {
  	console.log(req.body.name);

  	var name = req.body.name;

  	var dcClass = [
  		'Tristan',
  		'Josh',
  		'Bogdan',
  		'Keith',
  		'Will',
  		'Curtis',
  		'Joe',
  		'Kochan',
  		'Patrick',
  		'Jonathan',
  		'Jeremy'
  	];



  	if(dcClass.indexOf(name) > -1){
  		res.json({message: "Hello, " + name + ", you are a student in this class."});
  	}else{
  		res.json({message: "You are not a student in this class."});
  	}



	// res.json({message: "Success"});


});


module.exports = router;
