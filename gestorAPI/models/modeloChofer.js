var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('debug', true);

var choferSchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    apellido:String,
    nombre:String,
    telefono: String,
    celular: String,
    direccion: String,
    auto: String,
    patente: String,
    seguro: Date,
    licencia: Date,
    vtv: Date,
    observaciones:String
});

var Choferes = mongoose.model('modeloChofer', choferSchema, 'choferes');
console.log("se creo modelo Chofer");

module.exports = Choferes;