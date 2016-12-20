var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.end('success');
});

router.get('/test1', function(req, res, next) {
  return res.end('success');
});

router.get('/test2', function(req, res, next) {
  return res.end('success');
});

router.get('/test3', function(req, res, next) {
  return res.end('success');
});

module.exports = router;
