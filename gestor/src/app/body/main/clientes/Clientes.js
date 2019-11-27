import React from 'react'
import './Clientes.css'

class Clientes extends React.Component{
    constructor(){
        super()
        this.state={
            codigo:"",
            nombre:"",
            direccion:"",
            telefono:"",
            celular:"",
            comentarios:""
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSearch(event){
        if(event.key === 'Enter'){
            fetch("http://localhost:8080/api/leerClientes/" + event.target.value)
            .then( response => response.json())
            .then( response => {
                this.setState(prevState => {
                    return{
                        codigo: response.codigo,
                        nombre: response.nombre + " " + response.apellido,
                        direccion: response.direccion,
                        telefono: response.telefono,
                        celular: response.celular,
                        comentarios: response.observaciones
                    }
                })
            })
            .catch( err => {
                console.log("el codigo no existe")
                this.setState(prevState => {
                    return{
                        codigo: "",
                        nombre: "",
                        direccion: "",
                        telefono: "",
                        celular: "",
                        comentarios: ""
                    }
                })
            });
        }
    }

    handleSubmit(event){
        console.log(event.target.value)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <input type="text" onKeyPress={this.handleSearch} placeholder="Buscar..." className="search-bar"/>
                <form className="form-cliente" onSubmit={this.handleSubmit} action="/cliente">
                    <section className="datos">
                        <input type="integer" name="codigo" value={this.state.codigo} onChange={this.handleChange} placeholder="Código" />
                        <input type="text" name="nombre"  value={this.state.nombre} onChange={this.handleChange} placeholder="Nombre" />
                        <input type="text" name="direccion"  value={this.state.direccion} onChange={this.handleChange} placeholder="Dirección" />
                        <div className="telefonos">
                            <input type="text" name="telefono"  value={this.state.telefono} onChange={this.handleChange} placeholder="Telefono" />
                            <input type="text" name="celular"  value={this.state.celular} onChange={this.handleChange} placeholder="Celular" />
                        </div>
                        <textarea name="comentarios"  value={this.state.comentarios} onChange={this.handleChange} placeholder="Notas" />
                    </section>
                    <section className="acciones">
                        <button>Agregar cliente</button>
                        <button>Modificar cliente</button>
                        <button>Eliminar cliente</button>
                    </section>
                </form>                
            </div>
        )
    }
}

export default Clientes