var express = require('express');
var router = express.Router();
var cool = require('cool-ascii-faces');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express and Heroku' });
});

router.get('/cool', function (req, res, next) {
  res.send(cool());
});

router.get('/time', function (req, res, next) {
  var result = ''
  var times = process.env.TIMES || 5
  for (i = 0; i < times; i++)
    result += i + ' ';
  res.send(result);
});

module.exports = router;
