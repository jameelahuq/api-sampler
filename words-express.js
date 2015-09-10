/**
 * Created by HUQ on 9/9/15.
 */
module.exports = (req, res, next) => {
  console.log("counting words counting words counting words");
  res.write(countWords(req.params.params, res));
  res.end("That's the end, Portman! \n");
};

//example request
//http://raining%20cats%20and%20dogs%20%21%21%21%20%2A%2A%2A%20ohnoez/


function countWords (url) {

var url = decodeURIComponent(url);
console.log(url);
var wordMatch = url.match(/\w+/g) || [];
console.log("words: " + wordMatch.length);
var spaceMatch = url.match(/ /g) || [];
console.log("spaces: " + spaceMatch.length);
var letterMatch = url.match(/\w/g) || [];
console.log("letters: " + letterMatch.length);

var detailObj = {
  words: wordMatch.length,
  spaces: spaceMatch.length,
  letters: letterMatch.length
};

  return (JSON.stringify(detailObj));
}