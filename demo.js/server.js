var express = require('express');
var app = new express();
app.get('/',function(req,res){
    res.send('Get working');
});

app.listen(7777);
console.log("app listening on 7777");
