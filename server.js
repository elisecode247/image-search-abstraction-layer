var express = require('express');
var app = express();
var imgSearchController = require('./controllers/imgSearchController');
var SearchHistoryController = require('./controllers/sHistoryController');
var mongoose = require('mongoose');


mongoose.connect(process.env.MONGOHQ_URL);

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
  res.render('index');
});

imgSearchController(app);
SearchHistoryController(app);

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  console.log("listening")
});
