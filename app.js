
const express = require('express');
const path = require('path');
const cors = require('cors');
const router = require('./routes/index')
// arrancar el server.
const app = express();
const port = process.env.PORT || 3000;

// middlewares

app.use(express.static(__dirname + '/public'));

// CORS
app.use(cors());

//Json Type
app.use(express.json());


app.use('/', router);



app.listen(port, () => {
    console.log('Server on port 3000')
});