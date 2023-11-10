const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Deepuraj184:Deepuraj184@cluster0.zxtjmmt.mongodb.net/');

const db = mongoose.connection

db.on('error',console.error.bind(console,"error in connection"));

db.once('open',function(){
    console.log("connected to data base")
})

module.exports = db;