const fs = require('fs')
const sass = require('sass')

const result = sass.compile('./src/style.scss')

fs.writeFile('./style.css', result.css, () => {})
