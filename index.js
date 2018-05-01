var express = require('express'),
        app = express(),
       port = process.env.PORT || 3000;


// Routes
var homeRoutes = require('./routes/home');
var todoRoutes = require('./routes/todos');

app.use('/', homeRoutes);
app.use('/api/todos', todoRoutes);


// Server
app.listen(port, () => {
    console.log(`App is running on ${port}`);
});

