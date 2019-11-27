var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('debug', true);

var clienteSchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    codigo:String,
    apellido:String,
    nombre:String,
    direccion: String,
    entreCalles: String,
    telefono: String,
    celular: String,
    deuda:Number,
    observaciones:String
});

var Clientes = mongoose.model('modeloCliente', clienteSchema, 'clientes');
console.log("se creo modelo Cliente");

module.exports = Clientes;