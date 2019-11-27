import React from 'react'
import './Estado.css'
import EstadoContenedor from './estadoContenedor/EstadoContenedor'

class Estado extends React.Component{
    constructor(){
        super()
        this.state={
            newStatus: null,
            choferes: choferes
        }
        this.handleDrag = this.handleDrag.bind(this)
        this.handleDrop = this.handleDrop.bind(this)
    }

    handleDrag(object){
        const temp = this.state.choferes.map(chofer =>
            (chofer.nombre === object.props.nombre)? {id: chofer.id, nombre: chofer.nombre, status: this.state.newStatus}: chofer
        )
        this.setState(prevState => {
            return{
                newStatus: null,
                choferes: temp
            }
        })
    }

    handleDrop(object){
        this.setState(prevState => {
            return{
                newStatus: object.legend,
                choferes: prevState.choferes
            }
        })
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div className="status">
                <EstadoContenedor key={1} legend="Disponible" choferes={this.state.choferes} handleDrop={this.handleDrop} handleDrag={this.handleDrag} />
                <EstadoContenedor key={2} legend="En viaje" choferes={this.state.choferes} handleDrop={this.handleDrop} handleDrag={this.handleDrag} />
                <EstadoContenedor key={3} legend="No disponible" choferes={this.state.choferes} handleDrop={this.handleDrop} handleDrag={this.handleDrag} />
            </div>
        )
    }
}

export default Estado

const choferes = [
    {
        id: 1,
        nombre: "emilio.disi",
        status: "Disponible"
    },{
        id: 2,
        nombre: "facundo.arana",
        status: "En viaje"
    },{
        id: 3,
        nombre: "graciela.borges",
        status: "No disponible"
    }
]