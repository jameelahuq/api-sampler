/**
 * Created by HUQ on 9/9/15.
 */
module.exports = (req,res, next) => {
  console.log(req.params);
  res.send('Get to /');
};