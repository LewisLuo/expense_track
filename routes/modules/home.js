const express = require('express')
const router = express.Router()

const Tracker = require('../../models/expanse-tracker')

//Home page
router.get('/', (req, res) => {
  res.send('this is home page')
})

module.exports = router