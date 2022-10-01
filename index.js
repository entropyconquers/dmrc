var express = require('express');
var app = express();
const nearest_station = require('./api/neareststation');
app.use(express.json({ extended: false }));
app.get('/api', function (req, res) {
  res.status(200).send('Hello World!');
});



app.use('/api/nearest-station', nearest_station);



var port = process.env.PORT || 8080;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});




