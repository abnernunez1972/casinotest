require("dotenv").config();

const config = {
     dbUrl : process.env.DB_URL,
     port: process.env.PORT,
     host: process.env.HOST,
     publicRoute: process.env.PUBLIC_ROUTE || '/public',
     
}

module.exports = config;

