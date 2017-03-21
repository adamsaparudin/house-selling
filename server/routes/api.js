var express = require('express');
var router = express.Router();

var House = require('../controllers/house')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/house', House.read);
router.post('/house', House.create);
router.put('/house/:id', House.update);
router.delete('/house/:id', House.deleteHouse)

module.exports = router;
