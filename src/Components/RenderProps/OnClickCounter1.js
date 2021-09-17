import React, { Component } from 'react';

class OnClickCounter1 extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.counter}>Clicked {this.props.count} times</button>
            </div>
        );
    }
}

export default OnClickCounter1;