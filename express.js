const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const WebSocket = require('ws')

const port = process.env.PORT || 3000
const app = express()
const httpServer = http.createServer(app)
const wss = new WebSocket.Server({
    'server': httpServer
})

/*  Volatile list of connections in the system - this should be replaced with a database,
	since inactivity or any error in the code restarts the webserver and wipes the list */
let connections = []

wss.on('connection', ws => {
  let id

  ws.on('message', str => {
    const messageObj = JSON.parse(str)
    if (messageObj.event === 'handshake') {
      id = messageObj.id
      connections.push({
        id: messageObj.id,
        hook: ws,
        position: messageObj.position,
        message: messageObj.message
      })
    }
  })
  ws.on('close', () => {
    connections = connections.filter(x => x.id !== id)
  })
})

function websocketMessageClient(msgObj) {
  connections.forEach(connection => {
    if (connection.id === msgObj.id) {
      connection.hook.send(JSON.stringify(msgObj.message))
    }
  })
}

app.use("/", express.static('public/'))

app.use("/bundle.js", express.static('dist/bundle.js'))

app.use("/needer/welcome", express.static('public/'))
app.use("/needer/createuser", express.static('public/'))
app.use("/needer/searchmatch", express.static('public/'))
app.use("/needer/foundnomatch", express.static('public/'))
app.use("/needer/foundlistofmatches", express.static('public/'))
app.use("/needer/goodsreceived", express.static('public/'))
app.use("/helper/createuser", express.static('public/'))
app.use("/helper/dashboardhelper", express.static('public/'))
app.use("/helper/searchmatch", express.static('public/'))
app.use("/helper/establishcontacthelper", express.static('public/'))
app.use("/helper/contactfound", express.static('public/'))

/*	Use node module body-parser to be able to read request.body in the request handlers */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* API */
app.post('/message', message)
app.get('/needers', neederList)
app.get('/clear', clear)

httpServer.listen(port)
console.log(`Server listening on port ${port}`)

/* API to create a new helper */
function message(request, response)  {
  const { id, message } = request.body
  console.log('message incoming', id, message)
  response.status(200).send()
  websocketMessageClient({ id, message })
}

/* API list all connections */
function neederList(request, response)  {
  const removeHook = connections.map( x => ({
    id: x.id,
    position: x.position,
    message: x.message
  }) )
  response.status(200).json(removeHook)
}

/* Clear all connections */
function clear(request, response)  {
  connections = []
  response.status(200).send()
} 
