// load express and helper for post data
const express = require('express');
const bodyParser = require('body-parser');

const port = 8083;
const app = express();

// load existing json file
const messages = require('./messages.json'); 

// setup express server
app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
 
// handle GET requests to server:port
app.get('/', function (req, res) {

  console.log('GET');
  res.sendFile('index.html');
});

// Handles POST request to server:port
app.post('/', (req, res) => {

  console.log('POST:', req.body);

  // update your json file in memory
  messages.push(req.body);

  // send the json to browser
  res.send(messages);
});


// TODO: add loop to write JSON file (better to use a DB!)

app.listen(port); // start the server
console.log(`listening on ${port}`);
