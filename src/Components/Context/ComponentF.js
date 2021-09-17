import React, { Component } from 'react';
import {UserConsumer} from './userContext';

class ComponentF extends Component {

constructor(props) {
    super(props);
    
}


    render() {
        return (
           
                <UserConsumer>
                { value => {return <h1>Hello {value}</h1>} }
                </UserConsumer>
      
        );
    }
}

export default ComponentF;

