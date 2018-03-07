var express = require('express');
var router = express.Router();
var cool = require('cool-ascii-faces');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cool', function(req, res, next) {
  res.send(cool());
});

module.exports = router;
