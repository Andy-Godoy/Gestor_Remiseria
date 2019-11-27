import React from 'react'
import './Header.css'

class Header extends React.Component{
    constructor(){
        super()
    }

    render(){
        let message = (this.props.user.isLogged)? "Log out":"Log in"
        return(
            <header>
                <img src="#" alt="" className="logo"/>
                <h6 className="forecast">{this.props.user.isLogged && ("Welcome, " + this.props.user.userName)}</h6>
                <figure className="login-button">
                    <button onClick={this.props.handleLogin}>{message}</button>
                    <img src="#" alt=""/>
                </figure>
            </header>
        )
    }
}

export default Header;