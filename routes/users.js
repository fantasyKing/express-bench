var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test1', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test2', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test3', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test4', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
