const express = require('express');
const router = express.Router();

var usernames = [];

router.post('/current', (req, res) => {
  let userExists = usernames.indexOf(req.body.username) < 0 ? false : true;
  res.send({userExists});
});

router.post('/add', (req, res) => {
  usernames.push(req.body.username);
  res.end();
});

module.exports = router;
