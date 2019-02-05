const favicon = require('serve-favicon')
const express = require('express')
const api = require('./routes/api')

const app = express()

app.use(favicon(__dirname + '/../www/img/favicon.png'))
app.use('/', express.static(__dirname + '/../www'))
app.use('/api/forge', api)

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000

app.set('port', port)

const server = app.listen(port, () => {
  console.log('Server is running on port ' + port)
})
