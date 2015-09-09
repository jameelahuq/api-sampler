/**
 * Created by HUQ on 9/9/15.
 */
"use strict";

console.log(1);
var http = require('http');
let fs =require('fs');
console.log(2);


//let gData;
//fs.readFile("./package.json", "utf-8", (err,data) => {
//  gData = data; //NOT OK, because of blocking
//  console.log(3);
//
//});
console.log(4);

//if you want to read the port and it's in your package.json, then you'll need to read
//the json file first
fs.readFile("./package.json", "utf-8", (err,data) => {
  let json = JSON.parse(data);
let requestHandlerCb = (req, res) => {
    res.end(data);
    console.log(3);

};
console.log(6);
http.createServer(requestHandlerCb).listen(json.port);
  console.log(`On port: ${json.port}`);
console.log(7);
});
//
//var PORT = 8000;
//
//var server = http.createServer(function(req, res) {
//  console.log('\n');
//  console.log(new Date());
//  console.log("url:", req.url);
//  res.write();
//res.end("done")
//
//});
//
//server.listen(PORT, function() {
//  //listen is an asynchronous method, it takes time to load
//  //writing stuff below it means it might fire before this does
//  console.log("inside listener");
//});

