import React from 'react'
import './Choferes.css'

class Choferes extends React.Component{
    constructor(){
        super()
        this.state={
            criterio:""
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSearch(event){
        this.setState({
            criterio: event.target.value
        })
    }

    handleSubmit(event){
        console.log(event.target.value)
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.handleSearch} placeholder="Buscar..." className="search-bar"/>
                <form action="/chofer" onSubmit={this.handleSubmit} className="form-chofer">
                    <section className="datos">
                        <input type="text" name="nombre" placeholder="Nombre" />
                        <input type="text" name="direccion" placeholder="Dirección" />
                        <div className="telefonos">
                            <input type="text" name="telefono" placeholder="Telefono" />
                            <input type="text" name="celular" placeholder="Celular" />
                        </div>
                        <div className="auto">
                            <input type="text" name="auto" placeholder="Auto" />
                            <input type="text" name="patente" placeholder="Patente" />
                        </div>
                        <div className="vencimientos">
                            <div>
                                <p>Seguro:</p>
                                <input type="date" name="seguro" placeholder="Seguro" />
                            </div>
                            <div>
                                <p>Licencia:</p>
                                <input type="date" name="licencia" placeholder="Licencia" />
                            </div>
                            <div>
                                <p>VTV:</p>
                                <input type="date" name="vtv" placeholder="VTV" />
                            </div>
                        </div>
                        <textarea name="comentarios" placeholder="Notas" />
                    </section>
                    <section className="acciones" >
                        <button>Agregar chofer</button>
                        <button>Modificar chofer</button>
                        <button>Eliminar chofer</button>
                    </section>
                </form>                
            </div>
        )
    }
}

export default Choferes