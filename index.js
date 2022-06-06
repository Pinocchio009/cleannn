const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express'); 
const app = express();

module.exports = function(){
    if (!config.has(jwtPrivateKey)){
        console.error('Fatal error: jwtPrivateKey is not defined');
        process.exit(1);
}
}
    


mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Conneted to MongoDb Server....'))
    .catch(err => console.error('could not connect to MongoDb....'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies)
app.use('/api/rentals', rentals)
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 3200;
app.listen(port, ()=> console.log(`listening on port ${port}....`)) 