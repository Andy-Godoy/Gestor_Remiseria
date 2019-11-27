import React from 'react'
import './Contactenos.css'

class Contactenos extends React.Component{
    constructor(){
        super()
        this.state = {
            codigo: "",
            nombre: "",
            email: "",
            comentario: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="contact-us">
                <h1>Contáctenos</h1>
                <div>
                    <section>
                        <p>Nuestro servicio mejora y prospera gracias a ustedes.</p>
                        <p>Por ello, cualquier sugerencia que tengan serán más que bienvenidas.</p>
                    </section>
                    <section>
                        <form action="/postFeedback">
                            <input type="text" name="codigo" value={this.state.codigo} onChange={this.handleChange} placeholder="Código" />
                            <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange} placeholder="Nombre y apellido" />
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
                            <textarea name="comentario" value={this.state.comentario} onChange={this.handleChange} placeholder="Ingrese su mensaje..." />
                            <input type="submit" value="Enviar" />
                        </form>
                    </section>
                </div>
            </div>
        )
    }
}

export default Contactenos