/**
 * Created by HUQ on 9/9/15.
 */
'use strict';
let express = require('express');
let bodyParser = require('body-parser');
const PORT = 8000;

let app = express();

//console.log(bodyParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', (req, res, next) => {
  req.cade = 'cade nicholas';
  next();
});

app.get('/', require ('./express-roots.js'));

app.get('/', (req, res, next) => {
  console.log('req:', req);
  console.log('res:', res);
  res.send('getting getting getting');
});

app.post('/', (req, res, next) => {
  console.log(req.body.thing);
  res.send('posting posting posting')
});


app.get('/dodo', (req, res, next) => {
  res.send('dododod dodo do dododo dodo');
});


app.listen(8000, () => {
  console.log('listen listen listen');
});
