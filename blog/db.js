let mongoose = require('mongoose');

let mongoDBUrl = 'mongodb://127.0.0.1/aepi';

mongoose.connect(mongoDBUrl, { useNewUrlParser: true });

let connection = mongoose.connection;

connection.on('error', (error) => {
    console.error(error)
})