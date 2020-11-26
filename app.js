const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const judokaRoute = require('./routes/judoka');
const { static } = require('express');


// set up express app 
const app = express();

// connect mongodb
mongoose.connect('mongodb://localhost/judokaDb',{ useNewUrlParser: true , useUnifiedTopology: true })
.then(result => app.listen(3000, () => {
    console.log('the server is running in port 3000')
}))
.catch(err => console.log(err));


mongoose.Promise = global.Promise;

// set template engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// middleware 

app.use(bodyParser.json())


app.use(judokaRoute)



