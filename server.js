var express = require('express');
var app = express();
var imgSearchRouter = require('./routers/imgSearchRouter');
var SearchHistoryRouter = require('./controllers/sHistoryController');
var mongoose = require('mongoose');


mongoose.connect('mongodb://elisecode247:Goldfish2016@ds025389.mlab.com:25389/image-search');

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
  res.render('index');
});

imgSearchRouter(app);
SearchHistoryRouter(app);

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  console.log("listening")
});
