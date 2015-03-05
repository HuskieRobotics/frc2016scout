var express = require('express');
var router = express.Router();

var mysql = require('mysql');

/**
CREATE TABLE match
{
teamNumber INT,
matchNumber INT,
auto_starting_config INT,
RC_stage_to_auto INT,
RC_from_step INT,
RC_step_to_auto INT,
totes_to_auto,
totes_auto_stacked TEXT,
req_others_move_RC TEXT,
req_knock_over_RC TEXT,
fully_moves_to_auto TEXT,
num_totes_from_feeder INT,
num_totes_from_landfill INT,
num_RC_from_step INT,
num_fouls_called INT,
robot_tipped TEXT,
unprocessed_litter INT,
processed_litter INT,
1_num_existing_totes INT,
1_RC_placed TEXT,
1_totes_added INT,
1_litter_added TEXT,
2_num_existing_totes INT,
2_RC_placed TEXT,
2_totes_added INT,
2_litter_added TEXT,
3_num_existing_totes INT,
3_RC_placed TEXT,
3_totes_added INT,
3_litter_added TEXT,
4_num_existing_totes INT,
4_RC_placed TEXT,
4_totes_added INT,
4_litter_added TEXT,
5_num_existing_totes INT,
5_RC_placed TEXT,
5_totes_added INT,
5_litter_added TEXT,
6_num_existing_totes INT,
6_RC_placed TEXT,
6_totes_added INT,
6_litter_added TEXT,
7_num_existing_totes INT,
7_RC_placed TEXT,
7_totes_added INT,
7_litter_added TEXT,
8_num_existing_totes INT,
8_RC_placed TEXT,
8_totes_added INT,
8_litter_added TEXT,
9_num_existing_totes INT,
9_RC_placed TEXT,
9_totes_added INT,
9_litter_added TEXT,
10_num_existing_totes INT,
10_RC_placed TEXT,
10_totes_added INT,
10_litter_added TEXT,
tip1_stack_height INT,
tip1_in_control TEXT,
tip2_stack_height INT,
tip2_in_control TEXT,
tip3_stack_height INT,
tip3_in_control TEXT
}
*/


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

router.get('/pit', function(req, res, next) {
  res.render('pit');
});

router.get('/match', function(req, res, next) {
  res.render('match');
});

router.post('/save', function(req, res, next) {
	console.log('/save');
	console.log(req.body);

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

router.post('/save_pit', function(req, res, next){
  console.log('/save_pit');
  console.log(req.body);

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