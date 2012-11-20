var express = require('express'),
    app = express();

// log requests
app.use(express.logger('dev'));

app.use(express.static(__dirname + '/client'));

app.listen(80);
console.log('listening on port 80');
