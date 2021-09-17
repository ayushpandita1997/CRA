import React, { Component } from 'react';

class Mounting extends Component {

constructor(props) {
    super(props);
    
    this.state = {
        name: "Ayush"
    }
    console.log("LifecyleA constructor")
}

static getDerivedStateFromProps(props,state){
    console.log("LifecyleA getDerivedStateFromProps")
    return null
}

componentDidMount(){
    console.log("LifecyleA componentDidMount")
}

    render() {
        console.log("LifecyleA render")
        return (
            <div>
                Mounting
            </div>
        );
    }
}

export default Mounting;