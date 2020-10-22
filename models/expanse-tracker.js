const mongoose = require('mongoose')
const Schema = mongoose.Schema
const trackerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('ExpanseTracker', trackerSchema)