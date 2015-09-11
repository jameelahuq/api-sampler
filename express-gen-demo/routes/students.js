/**
 * Created by HUQ on 9/10/15.
 */
var express = require('express');
var router = express.Router();

router.all('/', (req, res) => {
  res.render('students');
});



module.exports = router;
