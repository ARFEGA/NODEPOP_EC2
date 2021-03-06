'use strict'
const mongoose = require('mongoose');
const conn = mongoose.connection;


conn.on('error', err => {
    console.log('Error al conectar DB', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log(`Servidor MongoDB conectado a ${mongoose.connection.name}`);
});
mongoose.connect('mongodb://' + process.env.MONGO_USER_PWD_SECRET + '@localhost/Nodepop');

//mongoose.connect('mongodb://nodepop:51677615@localhost/Nodepop', { useMongoClient: true });
module.exports = conn;