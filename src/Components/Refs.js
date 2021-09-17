import React, { Component } from 'react';

class Refs extends Component {

    constructor() {
        super();
        this.inputRef = React.createRef()
        console.log(this.inputRef)
    }
    
componentDidMount(){
this.inputRef.current.focus()
}

clickBtn = () => {
    alert (this.inputRef.current.value)
}

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.clickBtn}>Click</button>
            </div>
        );
    }
}

export default Refs;