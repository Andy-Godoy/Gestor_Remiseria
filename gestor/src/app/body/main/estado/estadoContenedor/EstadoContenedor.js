import React from 'react'
import './EstadoContenedor.css'
import EstadoChofer from './estadoChofer/EstadoChofer'

class EstadoContenedor extends React.Component{
    constructor(){
        super()
    }

    render(){
        const lista_choferes = this.props.choferes.map(chofer => 
            (chofer.status===this.props.legend) ? 
            <EstadoChofer key={chofer.id} nombre={chofer.nombre} status={chofer.status} handleDrag={this.props.handleDrag} /> : 
            null)
        return(
            <section className="driver-list">
                <form action="/action_page.php" onDragOver={function(e){e.preventDefault()}} onDrop={() => this.props.handleDrop(this.props)}>
                    <legend><b>{this.props.legend}</b></legend>
                    {lista_choferes}
                </form>
            </section>
        )
    }
}

export default EstadoContenedor