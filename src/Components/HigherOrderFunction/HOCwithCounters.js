import React, { Component } from 'react';

const withCounter = (WrappedComponent,incNumber) => {

    class HOCwithCounters extends Component {
        constructor(props) {
            super(props);
    
            this.state = {
                count: 0
            }
        }
        
        counter = () => {
            this.setState(prevState => {
                return {count: prevState.count+incNumber}
            })
        }

        render() {
            return (
                <WrappedComponent name="Ayush" count={this.state.count}  counter={this.counter}/>
            );
        }
    }
    return HOCwithCounters

}


export default withCounter;