require('express-async-errors');
const winston = require('winston');
require('winston-mongodb');
const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express'); 
const app = express();

require('./startup/routes')(app);
require('./startup/db')();


winston.handleExceptions(
    new winston.transports.File({filename: 'uncaughtExceptions.log'}));

process.on('unhandledRejection', (ex) => {
    throw ex;
});

winston.configure({

    transports: [new winston.transports.File({ filename: 'logfile.log' })],
    
    transports: [
    
    new winston.transports.MongoDB({ 
        db: "mongodb://localhost/vidly",
        level: 'info'
}),
    ],
    });

module.exports = function(){
    if (!config.has(jwtPrivateKey)){
        console.error('Fatal error: jwtPrivateKey is not defined');
        process.exit(1);
}
}



const port = process.env.PORT || 3200;
app.listen(port, ()=> console.log(`listening on port ${port}....`)) 