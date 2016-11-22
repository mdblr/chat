const express = require('express');
const router = express.Router();

var currentUsers = [];

router.post('/current', (req, res) => {
  let userExists = currentUsers.indexOf(req.body.username) < 0 ? false : true;
  res.send({userExists});
});

router.post('/add', (req, res) => {
  currentUsers.push(req.body.username);
  res.end();
});

router.delete('/remove', (req, res) => {
  let index = currentUsers.indexOf(req.body.username);
  if (index < 0) return false;
  currentUsers[index] = currentUsers[currentUsers.length - 1];
  currentUsers.length -= 1;
})

module.exports = router;
