import React, { Component } from "react";

class State extends React.Component{
    constructor(){
super()

this.state = {
    message: "Welcome User"
 }
}

changeMessage = () => {
    this.setState ({
        message: "Thank you for visiting"
    })
}


    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{this.changeMessage()}}>Subscribe</button>
            </div>
        )
    }
}


export default State;