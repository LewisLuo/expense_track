const Record = require('../record')
const db = require('../../config/mongoose')
const recordSeed = require('./data/record')

db.once('open', () => {
  for (let i = 0; i < recordSeed.length; i++) {
    if (i < recordSeed.length - 1) {
      Record.create(recordSeed[i])
      console.log(`紀錄種子: 第${i + 1}筆資料完成`)
    } else if (i === recordSeed.length - 1) {
      Record.create(recordSeed[i])
        .then(() => {
          console.log(`紀錄種子: 第${i + 1}筆資料完成`)
          console.log('done.')
          db.close()
        })
    }
  }
})