var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var sql = require('sql');

var columns = ['config',
  'bins_auto',
  'totes_auto',
  'noodles_auto',
  'bins',
  'auto',
  'recylingBings',
  'totes',
  'noodles',
  'coop',
  'cGround',
  'cHuman',
  'collect',
  'pickup',
  'stacksKnocked',
  'maxCrates',
  'platform'
  ];

var table = sql.define({
  name: 'table',
  columns: [
  'config',
  'bins_auto',
  'totes_auto',
  'noodles_auto',
  'bins',
  'auto',
  'recylingBings',
  'totes',
  'noodles',
  'coop',
  'cGround',
  'cHuman',
  'collect',
  'pickup',
  'stacksKnocked',
  'maxCrates',
  'platform'
  ]
});

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});

connection.connect();

var createTable = 'CREATE TABLE $match( ';

columns.forEach(function(e){
  createTable += e + ' TEXT NOT NULL';
});

createTable += ');';

connection.query(createTable, function(err, rows, fields){
  if (err) throw err;
});


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
	// });
});

// connection.end();

module.exports = router;