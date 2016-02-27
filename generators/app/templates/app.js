var express = require('express');
var app = express();

// We set public to be the static directory ( everything is now relative to public ) 
app.use('/', express.static('.tmp/public'));

app.listen('1337', function() { 
    console.log("Listening on port 1337");
}); 

