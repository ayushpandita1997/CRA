import React, { Component } from 'react';
import ForwardRef from './ForwardRef';

class ForwardRefParents extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }
    
    clickHandler = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
               <ForwardRef ref={this.inputRef} />
               <button onClick={this.clickHandler}>Focus</button>
            </div>
        );
    }
}

export default ForwardRefParents;