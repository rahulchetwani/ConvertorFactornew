var express = require('express');
var bodyParser=require('body-parser');
var app=express();
var port=process.env.PORT || 3000;
app.get('/getCurrencyconvertorfactor',function(req,res)
{
    //console.log(req.query);
    //res.send("Hello "+ req.query.name);
    //res.json({result:64.75});
    res.send("Hi Rahul");
});
app.listen(port);
