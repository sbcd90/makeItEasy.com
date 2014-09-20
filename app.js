var express = require('express');

var app = express();
app.set('views',__dirname + '/views');
app.engine('html',require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));

app.get('/getPracto', function(req,res){
    require('./controllers/practo').getPracto(req,res);
});

app.get('/getCab', function(req,res){
    require('./controllers/ola').getAvailability(req,res);
});
        
app.get('/', function(req,res){
/*    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET','https://api.practo.com/doctors/?page=1',false);
    xmlhttp.setRequestHeader("X-API-KEY","qPyOrdb7NEsXfvJ4CHyDisLa+ds=");
    xmlhttp.setRequestHeader("X-CLIENT-ID","27979c0c-52ac-4e33-8a23-710042499d7f");
    xmlhttp.send();
    var responseJSON = JSON.parse(xmlhttp.responseText);
    console.log(responseJSON);*/
    res.render('index.html');
});

app.get('/maps', function(req,res){
    res.render('maps.html');
});


app.listen(3000, function(){
    console.log('Listening on port 3000');
});