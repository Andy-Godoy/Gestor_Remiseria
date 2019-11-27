var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

//Conectar BD Mongo
var urlBD = "mongodb+srv://andres_godoy:Gnuflow00%21@mycluster-yr9xg.gcp.mongodb.net/gestor_remiseria?retryWrites=true&w=majority";

//Opciones conexion
var opts = {
    useNewUrlParser : true, 
    useUnifiedTopology: true, 
    connectTimeoutMS:20000
};

//Importo driver
var mongoose = require('mongoose');

//Pruebo conexion
mongoose.connect(urlBD,opts).then
(
    () => {
            console.log("Conexion con BD establecida con exito");
          }, //Se conecto
    err => { 
            console.log("ERROR:" + err); 
           } //Manejo error
);

//Import router
var Routes = require("./api-routes")

//Todo lo que recibe la app se tratara como json
app.use(bodyParser.urlencoded(
{
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

//Setup server port
var port = process.env.PORT || 8080;

//Enviar mensaje por Default URL
app.get('/', (req, res) => res.send('Express funcionando correctamente'));

// Use Api routes in the App
app.use('/api', Routes);

//Escuchar al puerto establecido
app.listen(port, function () {
     console.log("Corriendo RestHub en puerto: " + port);
});