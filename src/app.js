const path = require('path')
const express = require('express')
const mustacheExpress = require('mustache-express')

const {PORT: port = 3000} = process.env

const app = express()
app.engine('mustache', mustacheExpress())

app.use('/static', express.static(path.join(__dirname, 'static')))

app.use(express.static( __dirname + 'static'))
app.set('view engine', 'mustache')
app.set('views', __dirname + '/templates')

app.get('/', (req, res) => {
  res.render('index', {
    version: process.env.VERSION,
    hostname: process.env.HOSTNAME
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})