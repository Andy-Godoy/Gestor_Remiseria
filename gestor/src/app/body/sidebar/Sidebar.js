import React from 'react'
import './Sidebar.css'

class Sidebar extends React.Component{
    constructor(){
        super();
        this.state={
            userType: null
        }
    }

    getButtons(){
        if(this.props.role===null){
            return ([
                <Button key={4} id={4} handleClick={this.props.handleClick} label="Reservas" />,
                <Button key={5} id={5} handleClick={this.props.handleClick} label="Contáctenos" />
            ])
        }else{
            const botones = buttons.map(item => <Button key={item.id} id={item.id} handleClick={this.props.handleClick} label={item.label} />)
            
            return botones
        }
    }

    render(){
        const botones = this.getButtons()
        return(
            <aside>
                {botones}
            </aside>
        )
    }
}



function Button(props){
    return(
        <button id={props.id} onClick={() => props.handleClick(props.id)} className="sidebutton" action={props.label}>{props.label}</button>
    )
}

export default Sidebar;

const buttons = [
    {
        id: 1,
        label: "Estado"
    },{
        id: 2,
        label: "Clientes"
    },{
        id: 3,
        label: "Choferes"
    },{
        id: 4,
        label: "Reservas"
    },{
        id: 5,
        label: "Contáctenos"
    }
]