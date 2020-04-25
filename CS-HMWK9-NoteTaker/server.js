var express = require("express") 
var path = require("path") 

var malone = express() 
var PORT = process.env.PORT || 3000 

malone.use(express.urlencoded({ extended: true }));
malone.use(express.json()); 

malone.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

malone.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

malone.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  