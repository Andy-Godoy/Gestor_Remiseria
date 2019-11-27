import React from 'react'
import './Reservas.css'

class Reservas extends React.Component{
    constructor(){
        super()
        this.state = {
            codigo: "",
            nombre: "",
            destino: "",
            fecha: "",
            comentario: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        fetch("http://localhost:8080/api/leerClientes/" + this.state.codigo)
        .then( response => response.json())
        .then( response => {
            let data = {
                idCliente: response._id,
                nombre: this.state.nombre,
                destino: this.state.destino,
                fecha: this.state.fecha,
                comentario: this.state.comentario
            }
            console.log("guardando " + data)
            fetch("http://localhost:8080/api/guardarReserva", {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then( (response) => {
                console.log("response");
                console.log(response);
                return response.json();
            })
        })
        .catch( err => {
            console.log("No puede generar reserva si no es un cliente.")
            this.setState(prevState => {
                return{
                    codigo: "",
                    nombre: "",
                    destino: "",
                    fecha: "",
                    comentario: ""
                }
            })
        });
    }
    
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="reservations">
                <h1>Reservas</h1>
                <div>
                    <section>
                        <p>Porque siempre buscamos lo mejor para nuestros clientes, las reservas pueden realizarse ahora de forma online, 
                            en solo un minuto</p>
                        <p>Tenga en cuenta que haber solicitado una reserva no la garantiza. Recibirá confirmación por parte de
                            uno de nuestros empleados.</p>
                        <p><b>Observacion: </b>En caso que la dirección de origen no sea el domicilio asociado con el código, indique cuál 
                            es la dirección de origen en los comentarios.</p>
                    </section>
                    <section>
                        <form action="/reservas">
                            <input type="integer" name="codigo" value={this.state.codigo} onChange={this.handleChange} placeholder="Código" />
                            <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange} placeholder="Nombre" />
                            <input type="text" name="destino" value={this.state.destino} onChange={this.handleChange} placeholder="Destino" />
                            <input type="datetime-local" name="fecha" value={this.state.fecha} onChange={this.handleChange} />
                            <textarea name="comentario" value={this.state.comentario} onChange={this.handleChange} placeholder="Ingrese su comentario..." />
                            <input type="submit" value="Reservar" onClick={this.handleSubmit}/>
                        </form>
                    </section>
                </div>
            </div>
        )
    }
}

export default Reservas