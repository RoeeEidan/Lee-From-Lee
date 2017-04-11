const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/data/db/');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log("Connected to db at /data/db/")
});

const PORT = process.env.PORT || 3032;


app.use(express.static(__dirname + '/build'));

app.get('/', function (req, res) { //get all review by id
    res.send("Hello World")
})

app.listen(PORT , function () {
  console.log('Example app listening on port '+PORT)
})




