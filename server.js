var express = require('express');
cors = require('cors')


var app = express();

app.use(cors());


app.use(express.static('public'));
app.get('/', function(req,res) {
  res.sendfile('index.html');
});app.listen(3030);
