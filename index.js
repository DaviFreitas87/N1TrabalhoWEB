var express = require('express');
var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/elements.html', function(req, res){
    var conteudo = JSON.stringify(req.body);
    console.log(conteudo);
});

app.listen(8000);
console.log("Rodando na porta 8000");
