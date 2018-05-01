var express = require('express'),
    app = express();

var port = 3000;

app.get('/', function(req, res) {
    res.send('hello');
});

app.listen(port, function() {
    console.log(`App is running on ${port}`);
});