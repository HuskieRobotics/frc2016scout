var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scouting' });
});

router.post('/save', function(req, res, next) {
	console.log('hey');
	console.log(req.body);
});

module.exports = router;