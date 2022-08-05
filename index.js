var express = require('express')
var cors = require('cors')
var app = express()

var { getClients } = require('./routes/helpers')

app.use(express.json())
app.use(cors())

app.get('/', function (req, res) {
  getClients().then(r => console.log(r))
  res.send('en mantenimiento ...')
})

app.listen(3000, () => {});
