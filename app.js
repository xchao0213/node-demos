const config = require('./config');
const router = require('./router');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',require('ejs-mate'));

app.use(bodyParser.urlencoded({extended:true,limit:'1mb'}));
app.use('/',router);

app.listen(config.port, function(){
    console.log('listening on port'+ config.port)
})