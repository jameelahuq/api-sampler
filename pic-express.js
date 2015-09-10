/**
 * Created by HUQ on 9/9/15.
 */
"use strict";

let md5 = require('md5');

module.exports = (req, res, next) => {
  console.log("finding pics finding pics finding pics");
  res.send(doAvatars(req.params.params));
  //doMaths(req.url);
};


function doAvatars(url) {
  url = url.replace(/\/gravatarUrl\//, "");
  var newUrl = 'http://www.gravatar.com/avatar/' + md5(url);
  var avatarHTML = "<html><img src = '" +  newUrl + "'></img></html>";
  return avatarHTML;
}