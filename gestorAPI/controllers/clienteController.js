var Clientes = require('../models/modeloCliente');
var bodyParser = require('body-parser');

let getClientes = async (req, res) => {      
    //Listar resultados
    await Clientes.find({}, function(err,listaClientes){
        //devuelvo resultado query
        res.status(200).send(listaClientes);
        //si hay error
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        }
    });           
};

let getClienteByCodigo = (req, res) => {  
    let _codigo = req.params.id;    
    //Listar resultados
    Clientes.findOne({codigo: _codigo}, function(err,listaClientes){
        //devuelvo resultado query
        res.status(200).send(listaClientes);
        //si hay error
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        }
    });           
};

module.exports = {getClientes, getClienteByCodigo};