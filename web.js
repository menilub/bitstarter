var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var txt = fs.readFile('index.html).toString(); 
  response.send(txt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
