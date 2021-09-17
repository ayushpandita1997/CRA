import React, { Component } from 'react';

class EventBind extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            message: "hello"
        }
    }
    
    handler = ()=>{
this.setState({
    message: "Ayush"
})
    }

    render() {
        return (
            <div className="event">
                <p>{this.state.message}</p>
                <button onClick={this.handler}>Bind</button>
            </div>
        );
    }
}

export default EventBind;