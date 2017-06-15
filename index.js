var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/saveData', function (req, res) {
   // Prepare output in JSON format
   console.log('req.body::');
   console.log(req);
   response = {
      first_name:req.params.firstName,
      last_name:req.params.lastName,
      my_date:req.params.myDate
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen((process.env.PORT || 5000), function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
