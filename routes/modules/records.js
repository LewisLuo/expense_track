const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')
const category = require('../../models/category')

// Add new record
router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .then((categories) => {
      res.render('new', { categories })
    })
    .catch(error => console.log('Mongoose error: showing categories(adding page)'))
})

router.post('/', (req, res) => {
  return Record.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log('Mongoose error: creating record'))
})

//filter records
router.get('/', (req, res) => {
  const filter = req.query.category

  if (filter === '顯示全部') {
    res.redirect('/')
  } else {
    Record.find({ category: [filter] })
      .lean()
      .sort({ 'date': 'desc' })
      .then((records) => {
        Category.find()
          .lean()
          .then((categories) => {
            let totalAmount = 0
            for (let record of records) {
              totalAmount += record.amount
            }
            res.render('index', { categories, records, filter, totalAmount })
          })
          .catch(error => console.log('Mongoose error: showing categories(adding page)'))
      })
      .catch(error => console.log('Mongoose error: searching records'))
  }
})

// Edit record details
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then((record) => {
      Category.find()
        .lean()
        .then((categories) => {
          res.render('edit', { record, categories })
        })
        .catch(error => console.log('Mongoose error: showing categories(adding page)'))
    })
    .catch(error => console.log('Mongoose error: finding record id'))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then((record) => {
      record = Object.assign(record, req.body)
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log('Mongoose error: submitting edit'))
})

// Delete record
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then((record) => {
      record.remove()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log('Mongoose error: deleting record'))
})

module.exports = router