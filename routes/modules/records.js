const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

// Add new record
router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .then((categories) => {
      res.render('new', { categories })
    })
    .catch(error => console.log('Mongoose error: add page(category)'))
})

router.post('/', (req, res) => {
  return Record.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log('Mongoose error: creating record'))
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
        .catch(error => console.log('Mongoose error: edit page(category)'))
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
    .catch(error => console.log('Mongoose error: edit submit'))
})

// Delete record
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then((record) => {
      record.remove()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log('Mongoose error: delete'))
})
module.exports = router