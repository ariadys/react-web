const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000 || process.env.PORT;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const businessRoute = require('./business.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true },  function (err, res) {
	  if (err) {
	  console.log ('ERROR connecting');
	  } else {
	  console.log ('Succeeded connected');
	  }
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/business', businessRoute);

app.listen(port, () => console.log('Listen to the port of '+ port))