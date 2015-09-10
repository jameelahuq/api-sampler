/**
 * Created by HUQ on 9/9/15.
 */
//ultimate goal: make a doMaths, doWords, and doPicutres all on one local server
"use strict";

const PORT = 8000;

let express = require("express");
let maths = require("./maths-express.js");
let pics = require("./pic-express.js");
let words = require("./words-express.js");

let app = express();

app.get('/math/*', maths);

app.get('/pic/:params', pics);

app.get('/words/:params', words);

app.listen(8000, function() {
  console.log("listen listen listen");
});

