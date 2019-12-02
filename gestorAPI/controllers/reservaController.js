var Reservas = require('../models/modeloReserva');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

let getReservas = async (req, res) => {      
    //Listar resultados
    await Reservas.find({}, function(err,listaReservas){
        //devuelvo resultado query
        res.status(200).send(listaReservas);
        //si hay error
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        }
    });           
};

let postReservas = async (req, res) => {      
    var newReserva = Reservas({
        _id : mongoose.Types.ObjectId(),
        idCliente : req.body.idCliente,
        nombre : req.body.nombre,
        destino: req.body.destino,
        Fecha : req.body.fecha,
        comentario : req.body.comentario
    })
    console.log("guardando " + newReserva)
    await newReserva.save().
    then( (newReserva) => {
            res.status(200).send(newReserva); //devuelvo resultado query       
        },
        (err) => { 
            res.status(500).send(err);
            console.log(err);
        }
    );
};

module.exports = {getReservas, postReservas};