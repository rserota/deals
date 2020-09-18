const express = require('express')
const app = express()
const axios = require('axios')

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); // allow the front end to process responses from node server
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

app.get('/', (req, res)=>{
	// serve the homepage. Used in production, but for development, the vue dev server can serve the homepage instead. 
	res.sendFile('./dist/index.html', {root: './'})
});

app.use(express.static('./dist')) // serve built/minified assets from prod build
app.use(express.static('./public')) // serve images, etc

app.get('/deals', async (req, res, next)=>{
	try {
		const dealResponse = await axios.get('https://content-api.bradsdeals.com/api/v1/deals')
		console.log('deals?', dealResponse.data)
		res.send(dealResponse.data)
	}
	catch(error){
		console.log('failed to find deals: ', error)
		const dealError = Error('failed to find deals')
		next(dealError)
	}
})

app.listen(8000);
