import React, { Component } from 'react';

class CondRendering extends Component {

constructor(props) {
    super(props);
    
    this.state = {
        ifLoggedIn: true
    }
}

    render() {
        return (
            <div className='con'>
              {this.state.ifLoggedIn ? "Hello Ayush":"Hello Anu" }
            </div>
        );
    }
}

export default CondRendering;