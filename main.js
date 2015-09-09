var http = require('http');

var PORT = 8000;

var server = http.createServer(function(req, res) {
  console.log('\n');
  console.log(new Date());
  console.log("url:", req.url);

  var url = req.url;

  if (url.search('math') > -1) {
    doMaths(url, res);
  } else {
    switch (url) {
      case '/users':
      {
        res.statusCode = 404;
        res.write('<h1 style="color: mediumpurple">Nope</h1>');
        res.end("no data here :(");
        break;
      }
      case '/redirect':
        res.writeHead(302, {
          'Location': 'DARKSIDE'
        });
        break;
      default :
        res.end("It's THE DEFAULT!");
    }
    res.end("some text!");
  }
});


server.listen(PORT, function() {
  //listen is an asynchronous method, it takes time to load
  //writing stuff below it means it might fire before this does
  console.log("inside listener");
});

function doMaths(url, res) {
  var answer = "";
  var args = url.replace(/\/math\//, "").split('/');
  console.log(args);

  while (args.length > 1) {
    switch (args[1]) {
      case 'add':
        res.write("ADD! ");
        answer = (parseFloat(args[0]) + parseFloat(args[2])).toString();
        break;
      case 'sub':
        res.write("SUBTRACT! ");
        answer = (parseFloat(args[0]) - parseFloat(args[2])).toString();
        break;
      case 'div':
        res.write("DIVIDE! ");
        answer = (parseFloat(args[0]) / parseFloat(args[2])).toString();
        break;
      case 'mult':
        res.write("MULTIPLY! ");
        answer = (parseFloat(args[0]) * parseFloat(args[2])).toString();
        break;
      default:
        res.write("Enter a mathematical function in the form math/#/operator/#/operator/#");
    }
    args.splice(0, 3, answer);
    console.log(args);
  }
  res.end('answer: ' + answer);
}


console.log('end of file');
