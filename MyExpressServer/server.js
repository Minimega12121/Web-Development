const express = require('express');
const app = express();
//Homepage or Root 
app.get("/",function(request, response){
    console.log(request);
    response.send("<h1>Archit Dabral</h1>");
});
//New Route
app.get("/contact",function(req, res){
    res.send("Contact-me at:9997690432")
});
// About route
app.get("/about",function(req, res){
    res.send("My name is Archit Dabral,hehe")
});

app.listen(3000,function(){
    console.log("Server has started in port 3000");
});