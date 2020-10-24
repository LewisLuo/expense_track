const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')
const { get } = require('mongoose')

// Add new record
router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .then((categories) => {
      res.render('new', { categories })
    })
    .catch(error => console.log('Mongoose error: adding page(category)'))
})

router.post('/', (req, res) => {
  return Record.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log('Mongoose error: creating record'))
})

// Edit record page

module.exports = router