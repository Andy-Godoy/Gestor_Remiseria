import React from 'react';
import './App.css';
import Header from './header/Header'
import Footer from './footer/Footer'
import Body from './body/Body'

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            isLogged: false,
            userName: null,
            userType: null,
            userScreen: null
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    
    handleLogin(){
        let newType = (this.state.isLogged)?null:"administrador"
        let newUser = (this.state.isLogged)?null:"andres.godoy"
        let newScreen = (this.state.isLogged)?null:5
        this.setState(prevState => {
            return {
                isLogged: !prevState.isLogged,
                userName: newUser,
                userType: newType,
                userScreen: newScreen
            }
        })
    }

    handleClick(id){
        this.setState(prevState => {
            return {
                isLogged: prevState.isLogged,
                userName: prevState.userName,
                userType: prevState.userType,
                userScreen: id
            }
        })
    }

    render(){
        return (
            <div id="App" className="App">
                <Header user={this.state} handleLogin={this.handleLogin} />
                <Body user={this.state} handleClick={this.handleClick}/>
                <Footer />
            </div>
        );
    }
}

export default App;
