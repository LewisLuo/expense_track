const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

// Home page
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then((records) => {
      Category.find()
        .lean()
        .then((categories) => {
          let totalAmount = 0
          for (let record of records) {
            totalAmount += record.amount
          }
          res.render('index', { records, categories, totalAmount })
        })
    })
    .catch(error => { console.log('Mongoose error: home page(records)') })
})


module.exports = router