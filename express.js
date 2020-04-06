const express = require('express')

const app = express()
const port = process.env.PORT || 3000

/* 	Serve the static folder /static/
	/static/index.html -> oursite.com/index.html */
app.use(express.static('build'))

/* Start the server */
app.listen(port, () => console.log(`Frontend for grannleveransen.se port ${port}`))
