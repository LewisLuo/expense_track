const handlebars = require('handlebars')

handlebars.registerHelper('mapIcons', function (record, categories, options) {
  let icon = ''
  for (let i = 0; i < categories.length; i++) {
    if (record === categories[i].name) {
      icon = categories[i].icon
    }
  }
  return icon
})