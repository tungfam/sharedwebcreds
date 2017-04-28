var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/apple-app-site-association', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../public', 'apple-app-site-association')
}

module.exports = router;
