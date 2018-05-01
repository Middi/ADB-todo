var express = require('express'),
    app = express();
var port = process.env.PORT || 3000;


// Routes
app.get('/', (req, res) => {
    res.send('hello');
});


// Server
app.listen(port, () => {
    console.log(`App is running on ${port}`);
});

