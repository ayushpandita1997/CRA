import React, { Component } from 'react';
import withCounter from './HOCwithCounters';
;
class OnClickCounter extends Component {
   
    render() {
        // const {count} = this.state
        return (
            <div>
               <button onClick={this.props.counter}>{this.props.name} Clicked {this.props.count} Times</button>
            </div>
        );
    }
}

export default withCounter (OnClickCounter,1);