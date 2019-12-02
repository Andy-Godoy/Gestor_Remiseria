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

let postChoferes = async (req, res) => {      
    var newChofer = Chofer({
        _id : mongoose.Types.ObjectId(),
        apellido : req.body.apellido,
        nombre : req.body.nombre,
        direccion : req.body.direccion,
        telefono : req.body.telefono,
        celular : req.body.celular,
        auto : req.body.auto,
        patente : req.body.patente,
        seguro : req.body.seguro,
        licencia : req.body.licencia,
        vtv : req.body.vtv,
        observaciones : req.body.observaciones
    })
    console.log("guardando " + newChofer)
    await newChofer.save().
    then( (newChofer) => {
            res.status(200).send(newChofer);       
        },
        (err) => { 
            res.status(500).send(err);
            console.log(err);
        }
    );
};

module.exports = {getChoferes, postChoferes};