var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('debug', true);

var viajeSchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    idChofer : mongoose.Schema.Types.ObjectId,
    idCliente : mongoose.Schema.Types.ObjectId,
    fechaInicio : Date,
    fechaFin : Date,
    distancia : Number,
    valor : Number
});

var Viajes = mongoose.model('modeloViaje', viajeSchema, 'viajes');
console.log("se creo modelo Viaje");

module.exports = Viajes;