// Specify the NodeJS packages we need.
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

// Configure app to use bodyParser() and JSON, so we can easily get data from the HTTP body.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow CORS (i.e. cross-origin requests) for all requests, for simplicity.
app.use(cors());

// Get an instance of the express Router.
var router = express.Router();

var books = [
	{ title: 'Millennium', author: 'Stieg Larsson' },
	{ title: 'A Christmas Carol', author: 'Charles Dickens'},
	{ title: 'The Son', author: 'Jo Nesbo'}
]

var films = [
	{ name: 'Airplane', genre: 'Comedy', blurb: 'Classic plane spoof' },
	{ name: 'Skyfall', genre: 'Adventure', blurb: 'Bond spy yarn' },
	{ name: 'Love Actually', genre: 'RomCom', blurb: 'Hugh Grant playing Hugh Grant' },
	{ name: 'Mission Impossible', genre: 'Adventure', blurb: 'Hi-octane stunt fest' }
]

// HTTP handler methods.
router.get('/books', (req, res) => {
	console.log('Returning books')
	return res.status(200).json(books)
})

router.get('/films', (req, res) => {
	console.log('Returning films')
	return res.status(200).json(films)
})

// For requests that have the /api prefix, use the router to route the request to the appropriate HTTP handler method above.
app.use('/api', router);

// Start listening on port 8080.
app.listen(8080);
console.log("Service listening at http://localhost:8000/api");
