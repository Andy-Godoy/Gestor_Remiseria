var Feedback = require('../models/modeloFeedback');
var bodyParser = require('body-parser');

let getFeedback = async (req, res) => {      
    //Listar resultados
    await Feedback.find({}, function(err,listaFeedback){
        //devuelvo resultado query
        res.status(200).send(listaFeedback);
        //si hay error
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        }
    });           
};

let postFeedback = async (req, res) => {      
    var newFeedback = Feedback({
        _id : mongoose.Types.ObjectId(),
        idCliente : req.body.idCliente,
        nombre : req.body.nombre,
        email: req.body.email,
        fecha : new Date(),
        comentario : req.body.comentario
    })
    console.log("guardando " + newFeedback)
    await newFeedback.save().
    then( (newFeedback) => {
            res.status(200).send(newFeedback); //devuelvo resultado query       
        },
        (err) => { 
            res.status(500).send(err);
            console.log(err);
        }
    );
};

module.exports = {getFeedback, postFeedback};