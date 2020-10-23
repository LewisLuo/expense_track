const Record = require('../record')
const db = require('../../config/mongoose')
const recordSeed = require('./data/record')

db.once('open', () => {
  for (let i = 0; i < recordSeed.length; i++) {
    Record.create(recordSeed[i])
    console.log(`紀錄種子: 第${i + 1}筆資料完成`)
  }
  console.log('done.')
})