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

router.put('/edit', (req, res) => {
  let user = currentUsers.indexOf(req.body.user);
  currentUsers[user] = req.body.newName;
  res.send({
    user: currentUsers[user]
  });
});

router.delete('/remove', (req, res) => {
  let index = currentUsers.indexOf(req.body.username);
  if (index < 0) return false;
  currentUsers[index] = currentUsers[currentUsers.length - 1];
  currentUsers.length -= 1;
})

module.exports = router;
