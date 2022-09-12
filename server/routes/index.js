var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body)
    res.json('Hello, I receved your data !');
});

module.exports = router;