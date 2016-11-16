const express = require('express');
const router = express.Router();

var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

router.post('/', (req, res) => {
  let result = usernames.indexOf(req.body.username);
  res.send({result});
});

module.exports = router;
