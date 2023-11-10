const express = require('express');
const port = 8000;

const db = require('./config/mongoose')
const app = express();

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(express.static('./assets'))

app.set('view engine','ejs')
app.set('views','./views')

const expresslayouts = require('express-ejs-layouts');
app.use(expresslayouts);

app.use(express.urlencoded());

app.use('/',require('./routes/index'))
app.listen(port,function(err){
    if(err){
        console.log(err)
    }
    console.log("server is running on port",`${port}`)
})