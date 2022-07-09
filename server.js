const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const router = require('./network/routes');
const config = require('./config');
require('dotenv').config()
// Express ya viene incluido el Body-Pasrser
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//
// Activar el Router al final de los ENDPOINT
//app.use(router);

router(app);

//
// Serving static files

app.use(express.static(path.join(__dirname, 'public')));

// serving static paths
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Abrir servdior Express 
server.listen(config.port, function() {
    console.log('La aplicacin esta corriendo en ' + config.host + ":" + config.port);
});



db(config.dbUrl);

app.use(cors());

//