var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('debug', true);

var feedbackSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    idCliente : mongoose.Schema.Types.ObjectId,
    nombre : String,
    Fecha : Date,
    comentario : String
});

var Feedback = mongoose.model('modeloFeedback', feedbackSchema, 'feedback');
console.log("se creo modelo Feedback");

module.exports = Feedback;