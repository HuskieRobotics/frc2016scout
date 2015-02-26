var express = require('express');
var router = express.Router();

var mysql = require('mysql');


// var columns = ['config',
//   'bins_auto',
//   'totes_auto',
//   'noodles_auto',
//   'bins',
//   'auto',
//   'recyclingBins',
//   'totes',
//   'noodles',
//   'coop',
//   'cGround',
//   'cHuman',
//   'collect',
//   'pickup',
//   'stacksKnocked',
//   'maxCrates',
//   'platform'
//   ];

/**
CREATE TABLE scouting
(
config TEXT NOT NULL,
bins_auto TEXT NOT NULL,
totes_auto TEXT NOT NULL,
noodles_auto TEXT NOT NULL,
bins TEXT NOT NULL,
auto TEXT NOT NULL,
recyclingBins TEXT NOT NULL,
totes TEXT NOT NULL,
noodles TEXT NOT NULL,
coop TEXT NOT NULL,
cGround TEXT NOT NULL,
cHuman TEXT NOT NULL,
collect TEXT NOT NULL,
pickup TEXT NOT NULL,
stacksKnocked TEXT NOT NULL,
maxCrates TEXT NOT NULL,
platform TEXT NOT NULL,
teamNumber TEXT NOT NULL
)
*/


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'scout'
});

// connection.connect();

// var createTable = 'CREATE TABLE scouting( ';

// columns.forEach(function(e){
//   createTable += e + ' TEXT NOT NULL, ';
// });

// createTable += ');';

// var createDB = 'CREATE DATABASE scout';

// connection.query(, function(err, rows, fields){
//   if (err) throw err;
// });


// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scouting' });
});

router.post('/save', function(req, res, next) {
	console.log('hey');
	console.log(req.body);
	// connection.query('', function(err, rows, fields) {
	// 	console.log("oh");
	// // });s
  

  var query = "INSERT INTO scouting";
  query += " (config, bins_auto, totes_auto, noodles_auto, bins, auto, recyclingBins, totes, noodles,";
  query += " coop, cGround, cHuman, collect, pickup, stacksKnocked, maxCrates, platform, teamNumber) VALUES ('";
  query += req.body.config + "', '" + req.body.bins_auto + "', '" + req.body.totes_auto + "', '" + req.body.noodles_auto + "', '";
  query += req.body.bins + "', '" + req.body.auto + "', '" + req.body.recylingBins + "', '" + req.body.totes + "', '";
  query += req.body.noodles + "', '" + req.body.coop + "', '" + req.body.cGround + "', '" + req.body.cHuman + "', '";
  query += req.body.collect + "', '" + req.body.pickup + "', '" + req.body.stacksKnocked + "', '" + req.body.maxCrates + "', '";
  query += req.body.platform + "', '" + req.body.teamNumber + "');";

  connection.connect();

  console.log(query);

  connection.query(query, function(err, rows, fields){
    if (err) console.log(err);
  });

  connection.end();

});

// connection.end();

module.exports = router;