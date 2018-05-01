var express = require('express'),
        app = express(),
       port = process.env.PORT || 3000,
       bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Routes
var homeRoutes = require('./routes/home');
var todoRoutes = require('./routes/todos');

app.use('/', homeRoutes);
app.use('/api/todos', todoRoutes);


// Server
app.listen(port, () => {
    console.log(`App is running on ${port}`);
});

