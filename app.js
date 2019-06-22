const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/portfolio'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/portfolio/index.html'));
});

app.use(function(req, res, next) {
    if (!req.secure) {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
})

app.listen(process.env.PORT || 8080);