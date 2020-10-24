const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')
const { get } = require('mongoose')

// Edit record page
get('/:id/edit', (req, res) => {
  res.render('edit')
})

module.exports = router