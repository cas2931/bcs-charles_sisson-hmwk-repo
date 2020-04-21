var express = require("express") 
var path = require("path") 

var malone = express() 
var PORT = process.env.PORT || 3000 

malone.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  