var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('hello from the root file');
});

module.exports = router;