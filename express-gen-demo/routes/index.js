"use strict";
var express = require('express');
var router = express.Router();
var fs = require('fs');
var userName = '';

let GameUserDataObject= class {
  constructor() {
    this.userItems = [];
  };
};



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {instructions: 'Login and start searching!' });
});

router.post('/', (req, res) => {
  if (req.body.login === 'new') {
    userName = req.body.newUserName;
    console.log(userName.search(/^\w[\w\-\s]\w$/));
    if (userName.search(/^\w[\w\-\s]+\w$/) !== 0) {
      res.render('index', {instructions: `Not a valid name. Please enter a valid name in the "NEW GAME" field.`});
    } else {
      readUserFromJSON(userName, (userStats) => {
        if (userStats) {
          res.render('index', {instructions: `${userName} already exits. Select another user name.`});
        } else {
          writeUserToJSON(userName);
          res.render('index', {instructions: 'Login Successful! Welcome to the Adventure!'});
        }
      });
    }
  } else {
    userName = req.body.savedUserName;
    if (userName.search(/^\w[\w\-\s]+\w$/) !== 0) {
      res.render('index', {instructions: `Not a valid name. Please enter a valid name in the "LOAD GAME" field.`});
    } else {
      readUserFromJSON(userName, (userStats) => {
        if (userStats) {
          res.render('profile', {title: 'Welcome Back!', items: userStats.userItems, userName: userName});
        } else {
          res.render('index', {instructions: `${userName} does not exist. Check spelling or create a new user.`});
        }
      });
    }
  }
});

var readUserFromJSON = (userName, callback) => {
  fs.readFile('json/saved-data.json', function (err, dataBuffer) {
    var data = JSON.parse(dataBuffer);
    callback(data[userName]);
  });
};


var readAllUsersFromJSON = (callback) => {
  fs.readFile('json/saved-data.json', function (err, dataBuffer) {
    var data = JSON.parse(dataBuffer);
    callback(data);
  });
};

var writeUserToJSON = (userName) => {
  readAllUsersFromJSON((data) => {
    data[userName] = new GameUserDataObject;
    fs.writeFile('json/saved-data.json', JSON.stringify(data));
  });
  };


module.exports = router;
