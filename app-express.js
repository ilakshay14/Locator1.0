var express = require('express');
var app = express();

app.get('/', function(req, res){
        res.send(200, 'hello world');
});

app.listen(8888);
