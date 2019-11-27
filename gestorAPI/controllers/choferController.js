var Choferes = require('../models/modeloChofer');
var bodyParser = require('body-parser');

let getChoferes = async (req, res) => {      
    //Listar resultados
    await Choferes.find({}, function(err,listaChoferes){
        //devuelvo resultado query
        res.status(200).send(listaChoferes);
        //si hay error
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        }
    });           
};

module.exports = {getChoferes};