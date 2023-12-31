// /* eslint-disable no-console */
'use strict'

const express = require('express')
const path = require('path')
const app = express()
const mysql = require('mysql2')
const port = 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const connection = mysql.createConnection(config)

const sql = 'INSERT INTO people(name) values(\'dunha\');'

connection.query(sql)

let people = []

const query = 'SELECT * FROM people;'

connection.query(query, function (error, results) {
  if (error) throw error

  if (results) {
    people = results
  }
})

connection.end()

app.engine('.html', require('ejs').__express)

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'html')

app.get('/', function (req, res) {
  res.render('people', {
    people,
    title: 'FullCycle Example',
    header: 'People'
  })
})

app.listen(port, () => {
  console.log(`Application running on http://localhost:${port}`)
})
