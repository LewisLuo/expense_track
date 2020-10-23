const Category = require('../category')
const db = require('../../config/mongoose')
const categorySeed = require('./data/category')

db.once('open', () => {
  for (let i = 0; i < categorySeed.length; i++) {
    Category.create(categorySeed[i])
    console.log(`分類種子: 第${i + 1}筆資料完成`)
  }
  console.log('done.')
})