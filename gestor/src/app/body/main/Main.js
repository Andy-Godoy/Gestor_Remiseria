import React from 'react'
import './Main.css'
import Contactenos from './contactenos/Contactenos'
import Reservas from './reservas/Reservas'
import Estado from './estado/Estado'
import Clientes from './clientes/Clientes'
import Choferes from './choferes/Choferes'

class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            screen: null
        }
    }

    getScreen(userScreen){
        switch(userScreen){
            case 1: return(<Estado />)
            case 2: return(<Clientes />)
            case 3: return(<Choferes />)
            case 4: return(<Reservas />)
            case 5: return(<Contactenos />)
            default: return(<Contactenos />)
        }
    }

    render(){
        let screen = this.getScreen(this.props.userScreen)
        return(
            <main>
                {screen}
            </main>
        )
    }
}

export default Main