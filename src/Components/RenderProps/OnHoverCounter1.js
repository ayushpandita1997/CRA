import React, { Component } from 'react';

class OnHoverCounter1 extends Component {

    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.counter}>Clicked {this.props.count} times</h1>
            </div>
        );
    }
}

export default OnHoverCounter1;