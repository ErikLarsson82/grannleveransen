const express = require('express')

const app = express()
const port = process.env.PORT || 3000

/* 	Serve the static folder /static/
	/static/index.html -> oursite.com/index.html */
app.use(express.static('build'))
app.use("/needer/welcome", express.static('build'))
app.use("/needer/createuser", express.static('build'))
app.use("/needer/searchmatch", express.static('build'))
app.use("/needer/foundnomatch", express.static('build'))
app.use("/needer/foundlistofmatches", express.static('build'))
app.use("/needer/goodsreceived", express.static('build'))
app.use("/helper/createuser", express.static('build'))
app.use("/helper/dashboardhelper", express.static('build'))
app.use("/helper/searchmatch", express.static('build'))
app.use("/helper/establishcontacthelper", express.static('build'))
app.use("/helper/contactfound", express.static('build'))

/* Start the server */
app.listen(port, () => console.log(`Frontend for grannleveransen.se port ${port}`))
