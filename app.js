'use strict';
var express = require('express');
var app = express();

app.set('views','views');
app.set('view engine','jade');
app.get('/',function(req,res){res.render('home',{});});
app.listen(8080);
module.exports=app;