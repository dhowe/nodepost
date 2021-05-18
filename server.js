const express = require('express');
const bodyParser = require('body-parser');

const port = 8083;
const app = express();
const messages = require('./messages.json'); 

app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/', function (req, res) {
  console.log('GET');
  res.sendFile('index.html');
});

app.post('/', (req, res) => {
    console.log('POST:', req.body);
    res.sendStatus(200);
});

app.listen(port)
console.log(`listening on ${port}`);
