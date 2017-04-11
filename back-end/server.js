const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/data/db/');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log("Connected to db at /data/db/")
});



app.get('/', function (req, res) { //get all review by id
    res.send("Hello World")
})

app.listen(8182, () => {
	console.log('SERVER RUNNING ON 8182');
})