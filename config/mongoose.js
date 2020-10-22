const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb://localhost/expense-tracker'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('Mongoose error!')
})

db.once('open', () => {
  console.log('Mongoose connected!')
})

module.exports = db