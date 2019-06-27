const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/portfolio'));

app.use(function(req, res, next) {
    if (!req.secure && process.env.NODE_ENV === 'production') {
        const secureUrl = `https://${req.headers['host']}${req.url}`;
        console.log(secureUrl);
        // res.writeHead(301, { "Location": secureUrl })
        res.redirect(secureUrl);
        // res.end();
    }
    next();
})

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/portfolio/index.html'));
});

app.listen(process.env.PORT || 8080);