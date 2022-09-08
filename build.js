const fs = require('node:fs/promises')

const indexCode = `module.exports = {
  hello() {
    return 'hello from index'
  }
}
`

const mainCode = `module.exports = {
  hello() {
    return 'hello from main'
  }
}
`

const exampleCode = `module.exports = {
  hello() {
    return 'hello from example'
  }
}
`

const mainAliasCode = `module.exports = require('./dist/main')`
const exampleAliasCode = `module.exports = require('./dist/example')`

async function main() {
  await Promise.all([
    fs.writeFile('./dist/index.js', indexCode),
    fs.writeFile('./dist/main.js', mainCode),
    fs.writeFile('./dist/example.js', exampleCode),
    fs.writeFile('./main.js', mainAliasCode),
    fs.writeFile('./example.js', exampleAliasCode)
  ])
}

main()
