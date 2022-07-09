require("dotenv").config();

const config = {
     dbUrl : process.env.DB_URL ||  'mongodb+srv://abner:TlmDFK5FP9qivXfx@cluster0.y9pjg.mongodb.net/?retryWrites=true&w=majority',
     port: process.env.PORT || 3000,
     host: process.env.HOST || 'http://localhost',
     publicRoute: process.env.PUBLIC_ROUTE || '/public',
     
}

module.exports = config;

