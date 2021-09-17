import React, { Component } from 'react';

class UpdatingLifecycle extends Component {
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

    shouldComponentUpdate(){
        console.log("LifecyleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Lifecycle getSnapshotforUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("Lifecycle componentDidUpdate")
    }

    render() {
        console.log("LifecyleA render")
        return (
            <div>
                Updating
            </div>
        );
    }
}

export default UpdatingLifecycle;