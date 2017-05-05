var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
		
router.get('/apple-app-site-association', function(req, res, next) {
	res.sendFile(path.dirname(__dirname) + '/public/apple-app-site-association');
});

module.exports = router;
