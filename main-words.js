/**
 * Created by HUQ on 9/9/15.
 */
var http = require('http');

var PORT = 8000;

var server = http.createServer(function(req, res) {
  console.log('\n');
  console.log(new Date());
  console.log("url:", req.url);

  //http://raining%20cats%20and%20dogs%20%21%21%21%20%2A%2A%2A%20ohnoez/

  var url = decodeURIComponent(req.url);
  console.log(url);
  var wordMatch = url.match(/\w+/g);
  console.log("words: " + wordMatch.length);
  var spaceMatch = url.match(/ /g);
  console.log("spaces: " + spaceMatch.length);
  var letterMatch = url.match(/\w/g);
  console.log("letters: " + letterMatch.length);

  var detailObj = {
    words: wordMatch.length,
    spaces: spaceMatch.length,
    letters: letterMatch.length
  };

  res.write(JSON.stringify(detailObj));
  res.end(" npmThat's the end, Portman! \n");
});

server.listen(PORT, function() {
  //listen is an asynchronous method, it takes time to load
  //writing stuff below it means it might fire before this does
  console.log("inside listener");
});
