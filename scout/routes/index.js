'use strict';

var express = require('express');
var router = express.Router();

var mysql = require('mysql');

/**
CREATE TABLE matches
(
teamNumber INT NOT NULL,
matchNumber INT NOT NULL,
scout_name TEXT NOT NULL,
RC_stage_to_auto INT NOT NULL,
RC_from_step INT NOT NULL,
RC_step_to_auto INT NOT NULL,
totes_to_auto INT NOT NULL,
totes_auto_stacked TEXT NOT NULL,
fully_moves_to_auto TEXT NOT NULL,
num_totes_from_feeder INT NOT NULL,
num_totes_from_landfill INT NOT NULL,
num_RC_from_step INT NOT NULL,
robot_tipped TEXT NOT NULL,
1_num_existing_totes INT NOT NULL,
1_RC_placed TEXT NOT NULL,
1_totes_added INT NOT NULL,
2_num_existing_totes INT NOT NULL,
2_RC_placed TEXT NOT NULL,
2_totes_added INT NOT NULL,
3_num_existing_totes INT NOT NULL,
3_RC_placed TEXT NOT NULL,
3_totes_added INT NOT NULL,
4_num_existing_totes INT NOT NULL,
4_RC_placed TEXT NOT NULL,
4_totes_added INT NOT NULL,
5_num_existing_totes INT NOT NULL,
5_RC_placed TEXT NOT NULL,
5_totes_added INT NOT NULL,
6_num_existing_totes INT NOT NULL,
6_RC_placed TEXT NOT NULL,
6_totes_added INT NOT NULL,
7_num_existing_totes INT NOT NULL,
7_RC_placed TEXT NOT NULL,
7_totes_added INT NOT NULL,
8_num_existing_totes INT NOT NULL,
8_RC_placed TEXT NOT NULL,
8_totes_added INT NOT NULL,
9_num_existing_totes INT NOT NULL,
9_RC_placed TEXT NOT NULL,
9_totes_added INT NOT NULL,
10_num_existing_totes INT NOT NULL,
10_RC_placed TEXT NOT NULL,
10_totes_added INT NOT NULL,
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
  scout_name TEXT NOT NULL,
  drivetrain_type TEXT NOT NULL,
  intake_tote_landfill TEXT NOT NULL,
  intake_tote_feeder TEXT NOT NULL,
  pref_tote_getting TEXT NOT NULL,
  deposit_totes_step TEXT NOT NULL,
  max_tote_height INT NOT NULL,
  max_RC_height INT NOT NULL,
  noodle_rc TEXT NOT NULL,
  score_sideways_RC TEXT NOT NULL,
  drive_over_platform TEXT NOT NULL,
  acquire_RC_step TEXT NOT NULL
)
*/

var MATCH_COLUMNS = [
  'teamNumber',
  'matchNumber',
  'scout_name',
  'RC_stage_to_auto',
  'RC_from_step',
  'RC_step_to_auto',
  'totes_to_auto',
  'totes_auto_stacked',
  // 'req_others_move_RC',
  // 'req_knock_over_RC',
  'fully_moves_to_auto',
  'num_totes_from_feeder',
  'num_totes_from_landfill',
  'num_RC_from_step',
  'robot_tipped',
  // 'unprocessed_litter',
  // 'processed_litter',
  '1_num_existing_totes',
  '1_RC_placed',
  '1_totes_added',
  // '1_litter_added',
  '2_num_existing_totes',
  '2_RC_placed',
  '2_totes_added',
  // '2_litter_added',
  '3_num_existing_totes',
  '3_RC_placed',
  '3_totes_added',
  // '3_litter_added',
  '4_num_existing_totes',
  '4_RC_placed',
  '4_totes_added',
  // '4_litter_added',
  '5_num_existing_totes',
  '5_RC_placed',
  '5_totes_added',
  // '5_litter_added',
  '6_num_existing_totes',
  '6_RC_placed',
  '6_totes_added',
  // '6_litter_added',
  '7_num_existing_totes',
  '7_RC_placed',
  '7_totes_added',
  // '7_litter_added',
  '8_num_existing_totes',
  '8_RC_placed',
  '8_totes_added',
  // '8_litter_added',
  '9_num_existing_totes',
  '9_RC_placed',
  '9_totes_added',
  // '9_litter_added',
  '10_num_existing_totes',
  '10_RC_placed',
  '10_totes_added',
  // '10_litter_added',
  'tip1_stack_height',
  'tip1_in_control',
  'tip2_stack_height',
  'tip2_in_control',
  'tip3_stack_height',
  'tip3_in_control'
];

var PIT_COLUMNS = [
  'teamNumber',
  'scout_name',
  'drivetrain_type',
  'intake_tote_landfill',
  'intake_tote_feeder',
  'pref_tote_getting',
  'deposit_totes_step',
  'max_tote_height',
  'max_RC_height',
  'noodle_rc',
  'score_sideways_RC',
  'drive_over_platform',
  'acquire_RC_step'

  // 'mani_RC',
  // 'mani_totes',
  // 'push_litter_landfill',

  // 'active_tote_intake',
  // 'active_RC_intake',
  // 'acquire_totes_step',
  // 'acquire_upside_down_totes',
  // 'mani_upside_down_totes',
  // 'acquire_sideways_RC',
  // 'right_sideways_RC',
  // 'stack_on_robot',
  // 'internal_stacking',
];

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'scout'
});

connection.connect();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Scouting' });
});

router.get('/pit', function (req, res, next) {
  res.render('pit');
});

router.get('/match', function (req, res, next) {
  res.render('match');
});

router.post('/save_match', function (req, res, next) {
  console.log('/save_match');
  console.log(req.body);

  var query = 'INSERT INTO matches(';

  for (let i = 0; i < MATCH_COLUMNS.length; i++) {
    if (i < (MATCH_COLUMNS.length - 1)) {
      query += MATCH_COLUMNS[i] + ', ';
    } else {
      query += MATCH_COLUMNS[i];
    }
  }
  console.log('1');
  query += ') VALUES (';

  for (let i = 0; i < MATCH_COLUMNS.length; i++) {
    if (i < (MATCH_COLUMNS.length - 1)) {
      query += '\'' + req.body[MATCH_COLUMNS[i]] + '\', ';
    } else {
      query += '\'' + req.body[MATCH_COLUMNS[i]] + '\'';
    }
  }
  console.log('2');
  query += ');';

  console.log('HERE IS THE QUERY');
  console.log(query);

  connection.query(query, function (err, rows, fields) {
    if (err) {
      console.log(err);
    }
  });
});

router.post('/save_pit', function (req, res, next) {
  console.log('/save_pit');
  console.log(req.body);

  var query = 'INSERT INTO pit(' + PIT_COLUMNS.join(', ') + ') ';

  console.log('1');

  query += 'VALUES (';

  for (var i = 0; i < PIT_COLUMNS.length; i++) {
    if (i < (PIT_COLUMNS.length - 1)) {
      query += '\'' + req.body[PIT_COLUMNS[i]] + '\', ';
    } else {
      query += '\'' + req.body[PIT_COLUMNS[i]] + '\'';
    }
  }
  console.log('2');

  query += ');';

  console.log('HERE IS THE QUERY');
  console.log(query);

  connection.query(query, function (err, rows, fields) {
    if (err) {
      console.log(err);
    }
  });
});

module.exports = router;
