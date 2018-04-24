const express = require('express')
const { User } = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  User.find()
    .then(users => {
      console.log("SENDING USERS", users)
      res.json(users)
    })
    .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
  const newUser = new User(req.body.user)
  newUser.save().then((user) => {
    res.json(user)
  }).catch(console.log)
})

module.exports = router;
