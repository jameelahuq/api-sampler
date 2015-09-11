/**
 * Created by HUQ on 9/10/15.
 */
"use strict";

//var express = require('express');
//var router = express.Router();
//var fs = require('/json/saved-data.json');

var $newGameDiv = $('#newGame');
var $newUserInput = $newGameDiv.find('input');


var addUser = function() {
  var newUserName = $newUserInput.val();
  console.log(newUserName);
  $newUserInput.val("");
};

$newGameDiv.on("click", "button", addUser);




//  fs.appendFile('pets.json', JSON.stringify({a:6}));
//  res.render('index', { title: 'Express' });
//});





  //fs.appendFile('pets.json', JSON.stringify({a: 6}));
  //  res.render('index', {title: 'Express'});
  //});
//}