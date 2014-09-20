exports.getAvailability = function(req,res){
    var url = require('url');
    var url_parts = url.parse(req.url,true);
    
    var query = url_parts.query;
    var center_lat = query.centerlat;
    var center_long = query.centerlong;
    
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET','http://console.olacabs.com/city/3/category/1/availability.json?lat=' + center_lat + '&lng=' + center_long,false);
    xmlhttp.setRequestHeader("X-User-Agent","OlaDocumentation.v1");
    xmlhttp.setRequestHeader("version","v1");
    xmlhttp.setRequestHeader("X-Ola-API-Key-Auth","e033484d521146306308838b511c6877");
    xmlhttp.send();
//    console.log(JSON.parse(xmlhttp.responseText));
    res.end(xmlhttp.responseText);
};