const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

/*  Volatile list of helpers in the system - this should be replaced with a database,
	since inactivity or any error in the code restarts the webserver and wipes the list */
let helpers = []

/* 	Serve the static folder /static/
	/static/index.html -> oursite.com/index.html */
app.use(express.static('build'))
app.use('/static', express.static('build/static'))

/* 	Serve the image folder /static/images
	/static/images/img.png -> oursite.com/images/img.png */
//app.use('/images', express.static('static/images'))

// Serve specifically node_modules js-cookie
//app.use('/js.cookie.js', express.static('./node_modules/js-cookie/src/js.cookie.js'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

/*	Use node module body-parser to be able to read request.body in the request handlers */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* API */
app.post('/helper', helper)
app.get('/helper-list', helperList)
app.get('/clear', clear)

/* Start the server */
app.listen(port, () => console.log(`App grannleveransen.se listening at http://localhost:${port}`))


/* API to create a new helper */
function helper(request, response)  {  
  const { position, agent, id } = request.body
  
  helpers.push({
  	position: position,
  	agent: agent,
    id: id
  })

  response.status(200).send()
}


/* API list all helpers */
function helperList(request, response)  {
  response.status(200).json(helpers)
}


/* Clear all helpers */
function clear(request, response)  {
  helpers = []
  response.status(200).send()
} 
