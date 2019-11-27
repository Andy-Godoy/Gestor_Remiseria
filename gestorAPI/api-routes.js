// Initialize express router
let router = require('express').Router();
let clienteController = require('./controllers/clienteController.js');
let choferController = require('./controllers/choferController.js');
let reservaController = require('./controllers/reservaController.js');
let feedbackController = require('./controllers/feedbackController.js');
let viajeController = require('./controllers/viajeController.js');

// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

//EndPoint para leer todos los clientes
router.get('/leerClientes', function(req,res){
    clienteController.getClientes(req,res);
});

//EndPoint para buscar un clientes
router.get('/leerClientes/:id', function(req,res){
    clienteController.getClienteByCodigo(req,res);
});


//EndPoint para leer todos los choferes
router.get('/leerChoferes', function(req,res){
    choferController.getChoferes(req,res);
});

//EndPoint para leer todos los reservas
router.get('/leerReservas', function(req,res){
    reservaController.getReservas(req,res);
});

//EndPoint para guardar una reserva en la BD
router.post('/guardarReserva', function(req,res){
    reservaController.setReservas(req,res);
});


//EndPoint para leer todos los feedback
router.get('/leerFeedback', function(req,res){
    feedbackController.getFeedback(req,res);
});

//EndPoint para grabar un feedback
router.post('/grabarFeedback', function(req,res){
    feedbackController.postFeedback(req,res);
});


//EndPoint para leer todos los viajes
router.get('/leerViajes', function(req,res){
    viajeController.getViajes(req,res);
});


// Export API routes
module.exports = router;