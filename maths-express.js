/**
 * Created by HUQ on 9/9/15.
 */


module.exports = (req, res, next) => {
  console.log("doing maths doing maths doing maths");
  var result = doMaths(req.url, res);
  res.write('answer: ' + result + '\n/');
  res.send();
};


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
 return answer;
}