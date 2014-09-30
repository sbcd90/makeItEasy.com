exports.getAvailability = function(req,res){
    var url = require('url');
    var url_parts = url.parse(req.url,true);
    
    var query = url_parts.query;
    var center_lat = query.centerlat;
    var center_long = query.centerlong;
    var chamber_lat = query.chamberlat;
    var chamber_long = query.chamberlong;
    
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET','https://api.taxifarefinder.com/fare?key=wEGuch2qepAq&entity_handle=Bangalore-India&origin=' + center_lat + ',' + center_long + '&destination=' + chamber_lat + ',' + chamber_long,false);
    xmlhttp.send();
//    console.log(JSON.parse(xmlhttp.responseText));
    res.end(xmlhttp.responseText);
};