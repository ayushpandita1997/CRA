import React, { Component } from 'react';
import withCounter from './HOCwithCounters';

class OnHoverCounter extends Component {
    
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.counter}>{this.props.name} Hovered {this.props.count} Times</h1>
            </div>
        );
    }
}

export default withCounter (OnHoverCounter,2);