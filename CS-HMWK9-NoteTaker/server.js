var express = require("express") 
var path = require("path") 

var malone = express() 
var PORT = process.env.PORT || 3000 

malone.use(express.urlencoded({ extended: true }));
malone.use(express.json());  

// Route to index.html
malone.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route to notes.html
malone.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

// Get all notes in db.json
malone.get("/api/notes",function(req, res) {
  res.sendFile(path.join(__dirname, "db.json" ));
});

// Shows a single note
malone.get("/api/notes/:id", function(req, res) {
  let savedNotes = JSON.parse(fs.readFileSync("db.json", "utf8"));
  res.json(savedNotes[Number(req.params.id)]);

});
malone.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  