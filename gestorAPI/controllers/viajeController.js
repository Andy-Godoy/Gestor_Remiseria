var Viajes = require('../models/modeloViaje.js');
var bodyParser = require('body-parser');

let getViajes = async (req, res) => {      
    //Listar resultados
    await Viajes.find({}, function(err,listaViajes){
        //devuelvo resultado query
        res.status(200).send(listaViajes);
        //si hay error
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        }
    });           
};

module.exports = {getViajes};