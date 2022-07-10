const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
   //
   jugador: {
      type: String,
      required: true,
      
    },
      saldo: {
      type: Number,
      default: 10000,
    },
    montoApuesta: {
      type: Number,
      default: 0,
          },
    porcentajeApuesta: {
      type: Number,
      default: 0,
    },
    colorApuesta: {
      type: String,
      default: "rojo",
      
           },
      

}) ;

const model = mongoose.model('User',mySchema);
module.exports = model;
