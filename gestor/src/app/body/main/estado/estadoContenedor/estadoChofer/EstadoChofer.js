import React from 'react'
import './EstadoChofer.css'

class EstadoChofer extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className="driver-status" draggable="true" status={this.props.status} onDragEnd={() => this.props.handleDrag(this)} >
                <section className="driver-holder">{this.props.nombre}</section>
            </div>
        )
    }
}

export default EstadoChofer