/**
 * Created by HUQ on 9/9/15.
 */
"use strict";

let fs = require("fs");
let http = require("http");
let exec = require('child_process').exec;
let child;
const PORT = 8000;


http.createServer((req,res) =>  {

  exec('vm_stat', (err, stdout, stderr) => {
    var pagesFree = stdout.match(/Pages free:\s+(\d+)/)[1];
    res.write('<html><meta http-equiv="refresh"content="5"></html>');
    res.write(`Pages free: ${pagesFree}\n`);
    //res.write("<meta http-equiv='refresh' content='5'>");
    res.end();

  //    res.end("Bloop de Doop");
  //  }, 5000)
  });

}).listen(PORT, () => {
  console.log("Bloop");
});


//child = exec('vm_stat',
//  function (error, stdout, stderr) {
//   // let json = JSON.parse(stdout);
//  console.log('stdout: ' + stdout); //stdout is a string
//    let pageFree = stdout.match(/Pages free:[\s\d]+/);
//    console.log(pageFree[0]);
//    let data = pageFree[0];
//
//    let requestHandler = (req, res) => {
//      res.write(data);
//      res.write("<meta http-equiv='refresh' content='5'>");
//
//    };
//
//    http.createServer(requestHandler).listen(8000);
//
//
//
//    if (error !== null) {
//    console.log('exec error: ' + error);
//  }






//});


//console.log(Object.keys(process));
