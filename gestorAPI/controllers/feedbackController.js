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
    //Listar resultados
    let myData = new Feedback(req.body);
    myData.save()
        .then(item => {
            res.status(200).send(myData);
    })
    .catch(err => {
        res.status(400).send(err);
        console.log(err);
    });
};

module.exports = {getFeedback, postFeedback};