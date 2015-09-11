/**
 * Created by HUQ on 9/10/15.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
var pets = ['cats','dog', 'hyena'];

router.get('/', function(req, res, next) {
  fs.appendFile('pets.json', JSON.stringify({a:6}));
  res.render('index', { title: 'Express' });
});

router.get('/adopt', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
