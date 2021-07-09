var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send({greeting:'hello'});
});
router.get('/metro', function(req, res) {
  res.send({greeting:'hello'});
});
module.exports = router;
