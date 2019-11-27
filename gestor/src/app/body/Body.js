import React from 'react'
import './Body.css'
import Sidebar from './sidebar/Sidebar'
import Main from './main/Main'

class Body extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="main-section">
                <Sidebar role={this.props.user.userType} handleClick={this.props.handleClick}/>
                <Main userScreen={this.props.user.userScreen}/>
            </div>
        )
    }
}

export default Body