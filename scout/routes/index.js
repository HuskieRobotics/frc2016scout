var express = require('express');
var router = express.Router();

var mysql = require('mysql');

/**
CREATE TABLE match
(
teamNumber INT NOT NULL,
matchNumber INT NOT NULL,
auto_starting_config INT NOT NULL,
RC_stage_to_auto INT NOT NULL,
RC_from_step INT NOT NULL,
RC_step_to_auto INT NOT NULL,
totes_to_auto INT NOT NULL,
totes_auto_stacked TEXT NOT NULL,
req_others_move_RC TEXT NOT NULL,
req_knock_over_RC TEXT NOT NULL,
fully_moves_to_auto TEXT NOT NULL,
num_totes_from_feeder INT NOT NULL,
num_totes_from_landfill INT NOT NULL,
num_RC_from_step INT NOT NULL,
num_fouls_called INT NOT NULL,
robot_tipped TEXT NOT NULL,
unprocessed_litter INT NOT NULL,
processed_litter INT NOT NULL,
1_num_existing_totes INT NOT NULL,
1_RC_placed TEXT NOT NULL,
1_totes_added INT NOT NULL,
1_litter_added TEXT NOT NULL,
2_num_existing_totes INT NOT NULL,
2_RC_placed TEXT NOT NULL,
2_totes_added INT NOT NULL,
2_litter_added TEXT NOT NULL,
3_num_existing_totes INT NOT NULL,
3_RC_placed TEXT NOT NULL,
3_totes_added INT NOT NULL,
3_litter_added TEXT NOT NULL,
4_num_existing_totes INT NOT NULL,
4_RC_placed TEXT NOT NULL,
4_totes_added INT NOT NULL,
4_litter_added TEXT NOT NULL,
5_num_existing_totes INT NOT NULL,
5_RC_placed TEXT NOT NULL,
5_totes_added INT NOT NULL,
5_litter_added TEXT NOT NULL,
6_num_existing_totes INT NOT NULL,
6_RC_placed TEXT NOT NULL,
6_totes_added INT NOT NULL,
6_litter_added TEXT NOT NULL,
7_num_existing_totes INT NOT NULL,
7_RC_placed TEXT NOT NULL,
7_totes_added INT NOT NULL,
7_litter_added TEXT NOT NULL,
8_num_existing_totes INT NOT NULL,
8_RC_placed TEXT NOT NULL,
8_totes_added INT NOT NULL,
8_litter_added TEXT NOT NULL,
9_num_existing_totes INT NOT NULL,
9_RC_placed TEXT NOT NULL,
9_totes_added INT NOT NULL,
9_litter_added TEXT NOT NULL,
10_num_existing_totes INT NOT NULL,
10_RC_placed TEXT NOT NULL,
10_totes_added INT NOT NULL,
10_litter_added TEXT NOT NULL,
tip1_stack_height INT NOT NULL,
tip1_in_control TEXT NOT NULL,
tip2_stack_height INT NOT NULL,
tip2_in_control TEXT NOT NULL,
tip3_stack_height INT NOT NULL,
tip3_in_control TEXT NOT NULL
)
*/

/**
CREATE TABLE pit
(
  teamNumber INT NOT NULL,
  mani_RC TEXT NOT NULL,
  mani_totes TEXT NOT NULL,
  push_litter_landfill TEXT NOT NULL,
  intake_tote_landfill TEXT NOT NULL,
  intake_tote_feeder TEXT NOT NULL,
  active_tote_intake TEXT NOT NULL,
  active_RC_intake TEXT NOT NULL,
  drivetrain_type TEXT NOT NULL,
  pref_tote_getting TEXT NOT NULL,
  deposit_totes_step TEXT NOT NULL,
  acquire_totes_step TEXT NOT NULL,
  acquire_upside_down_totes TEXT NOT NULL,
  mani_upside_down_totes TEXT NOT NULL,
  acquire_sideways_RC TEXT NOT NULL,
  score_sideways_RC TEXT NOT NULL,
  right_sideways_RC TEXT NOT NULL,
  stack_on_robot TEXT NOT NULL,
  internal_stacking TEXT NOT NULL,
  drive_over_platform TEXT NOT NULL,
  acquire_RC_step TEXT NOT NULL,
  max_tote_height INT NOT NULL,
  max_RC_height INT NOT NULL
)
*/

var MATCH_COLUMNS = [
  'teamNumber',
  'matchNumber',
  'auto_starting_config',
  'RC_stage_to_auto',
  'RC_from_step',
  'RC_step_to_auto',
  'totes_to_auto',
  'totes_auto_stacked',
  'req_others_move_RC',
  'req_knock_over_RC',
  'fully_moves_to_auto',
  'num_totes_from_feeder',
  'num_totes_from_landfill',
  'num_RC_from_step',
  'num_fouls_called',
  'robot_tipped',
  'unprocessed_litter',
  'processed_litter',
  '1_num_existing_totes',
  '1_RC_placed',
  '1_totes_added',
  '1_litter_added',
  '2_num_existing_totes',
  '2_RC_placed',
  '2_totes_added',
  '2_litter_added',
  '3_num_existing_totes',
  '3_RC_placed',
  '3_totes_added',
  '3_litter_added',
  '4_num_existing_totes',
  '4_RC_placed',
  '4_totes_added',
  '4_litter_added',
  '5_num_existing_totes',
  '5_RC_placed',
  '5_totes_added',
  '5_litter_added',
  '6_num_existing_totes',
  '6_RC_placed',
  '6_totes_added',
  '6_litter_added',
  '7_num_existing_totes',
  '7_RC_placed',
  '7_totes_added',
  '7_litter_added',
  '8_num_existing_totes',
  '8_RC_placed',
  '8_totes_added',
  '8_litter_added',
  '9_num_existing_totes',
  '9_RC_placed',
  '9_totes_added',
  '9_litter_added',
  '10_num_existing_totes',
  '10_RC_placed',
  '10_totes_added',
  '10_litter_added',
  'tip1_stack_height',
  'tip1_in_control',
  'tip2_stack_height',
  'tip2_in_control',
  'tip3_stack_height',
  'tip3_in_control'
];

var PIT_COLUMNS = [
  'teamNumber',
  'mani_RC',
  'mani_totes',
  'push_litter_landfill',
  'intake_tote_landfill',
  'intake_tote_feeder',
  'active_tote_intake',
  'active_RC_intake',
  'drivetrain_type',
  'pref_tote_getting',
  'deposit_totes_step',
  'acquire_totes_step',
  'acquire_upside_down_totes',
  'mani_upside_down_totes',
  'acquire_sideways_RC',
  'score_sideways_RC',
  'right_sideways_RC',
  'stack_on_robot',
  'internal_stacking',
  'drive_over_platform',
  'acquire_RC_step',
  'max_tote_height',
  'max_RC_height'
];


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'scout'
});

connection.connect();

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

router.post('/save_match', function(req, res, next) {
	console.log('/save_match');
	console.log(req.body);

  var query = "INSERT INTO matches(";

  for (i = 0; i<MATCH_COLUMNS.length; i++)
  {
    if (i < (MATCH_COLUMNS.length-1))
    {
        query += MATCH_COLUMNS[i] + ", ";
    }
    else
    {
        query += MATCH_COLUMNS[i];
    }
  }  
  console.log("1");
  query += ") VALUES (";

  for (i = 0; i<MATCH_COLUMNS.length; i++)
  {
    if (i < (MATCH_COLUMNS.length-1))
    {
        query += "'" + req.body[MATCH_COLUMNS[i]] + "', ";
    }
    else
    {
        query += "'" + req.body[MATCH_COLUMNS[i]] + "'";
    }
  }
  console.log("2");
  query += ");";  

  // var query = "INSERT INTO scouting";
  // query += " (config, bins_auto, totes_auto, noodles_auto, bins, auto, recyclingBins, totes, noodles,";
  // query += " coop, cGround, cHuman, collect, pickup, stacksKnocked, maxCrates, platform, teamNumber) VALUES ('";
  // query += req.body.config + "', '" + req.body.bins_auto + "', '" + req.body.totes_auto + "', '" + req.body.noodles_auto + "', '";
  // query += req.body.bins + "', '" + req.body.auto + "', '" + req.body.recylingBins + "', '" + req.body.totes + "', '";
  // query += req.body.noodles + "', '" + req.body.coop + "', '" + req.body.cGround + "', '" + req.body.cHuman + "', '";
  // query += req.body.collect + "', '" + req.body.pickup + "', '" + req.body.stacksKnocked + "', '" + req.body.maxCrates + "', '";
  // query += req.body.platform + "', '" + req.body.teamNumber + "');";
  

  console.log("HERE IS THE QUERY");
  console.log(query);

  connection.query(query, function(err, rows, fields){
    if (err) console.log(err);
  });

});

router.post('/save_pit', function(req, res, next){
  console.log('/save_pit');
  console.log(req.body);

  var query = "INSERT INTO pit(";

  for (i = 0; i<PIT_COLUMNS.length; i++)
  {
    if (i < (PIT_COLUMNS.length-1))
    {
        query += PIT_COLUMNS[i] + ", ";
    }
    else
    {
        query += PIT_COLUMNS[i];
    }
  }  
  console.log("1");

  query += ") VALUES (";

  for (i = 0; i<PIT_COLUMNS.length; i++)
  {
    if (i < (PIT_COLUMNS.length-1))
    {
        query += "'" + req.body[PIT_COLUMNS[i]] + "', ";
    }
    else
    {
        query += "'" + req.body[PIT_COLUMNS[i]] + "'";
    }
  }
  console.log("2");

  query += ");";  
  // var query = "INSERT INTO scouting";
  // query += " (config, bins_auto, totes_auto, noodles_auto, bins, auto, recyclingBins, totes, noodles,";
  // query += " coop, cGround, cHuman, collect, pickup, stacksKnocked, maxCrates, platform, teamNumber) VALUES ('";
  // query += req.body.config + "', '" + req.body.bins_auto + "', '" + req.body.totes_auto + "', '" + req.body.noodles_auto + "', '";
  // query += req.body.bins + "', '" + req.body.auto + "', '" + req.body.recylingBins + "', '" + req.body.totes + "', '";
  // query += req.body.noodles + "', '" + req.body.coop + "', '" + req.body.cGround + "', '" + req.body.cHuman + "', '";
  // query += req.body.collect + "', '" + req.body.pickup + "', '" + req.body.stacksKnocked + "', '" + req.body.maxCrates + "', '";
  // query += req.body.platform + "', '" + req.body.teamNumber + "');";
  console.log("HERE IS THE QUERY");
  console.log(query);

  connection.query(query, function(err, rows, fields){
    if (err) console.log(err);
  });

});

module.exports = router;