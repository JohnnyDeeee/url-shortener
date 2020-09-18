var express = require('express');
var router = express.Router();
const UrlModel = require('../models/url');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // TODO: Get all Urls
  UrlModel.find(function(err, urls) {
    if(err) {
      // TODO: Return error to client
      return console.error(err);
    }

    res.json(urls);
  });
});

module.exports = router;
