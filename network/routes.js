const express = require('express');

// Aqui se listan las rutas de los Componentes que usara la apps

const user = require('../components/user/network');
//

// Aqui se agrgan las rutas al server de express 
const routes = function (server) {  
     server.use('/user', user);
  }
//

module.exports = routes;