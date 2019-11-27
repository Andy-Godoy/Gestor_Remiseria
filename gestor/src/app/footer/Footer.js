import React from 'react'
import './Footer.css'

class Footer extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <footer>
                <section className="horarios">
                    <p><b>Horarios de Atención:</b></p>
                    <p>Todos los días, 24hs.</p>
                </section>
                <section className="datos">
                    <p><b>Dirección:</b> José Hernandez 1024</p>
                    <p><b>Tel.:</b> (011) 4298-4912</p>
                </section>
            </footer>
        )
    }
}

export default Footer;