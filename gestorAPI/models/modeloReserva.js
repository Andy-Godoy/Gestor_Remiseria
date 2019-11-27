var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('debug', true);

var reservaSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    idCliente : String,
    nombre : String,
    destino : String,
    Fecha : Date,
    comentario : String
});

var Reservas = mongoose.model('modeloReserva', reservaSchema, 'reservas');
console.log("se creo modelo Reserva");

module.exports = Reservas;