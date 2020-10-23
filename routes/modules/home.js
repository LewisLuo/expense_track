const express = require('express')
const router = express.Router()

const Tracker = require('../../models/record')

//Home page
router.get('/', (req, res) => {
  res.send('this is home page')
})

module.exports = router