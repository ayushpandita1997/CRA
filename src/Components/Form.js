import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            comment: '',
            topic: 'react'
        }
    }
    
ChangeName = (event) => {
this.setState ({
username: event.target.value
 })
}

ChangeComment = (event) => {
    this.setState ({
    comment: event.target.value
    })    
}

ChangeTopic = (event)=> {
    this.setState ({
        topic: event.target.value
        })  
}

subForm = (event)=> {
    
        alert (`${this.state.username} ${this.state.comment} ${this.state.topic}`)
       event.preventDefault()
}


    render() {
        const {username,comment,topic} = this.state
        return (
            <form onSubmit={this.subForm}>
            <div>
               <label>Form Component</label>
               <input onChange={this.ChangeName} type='text' value={username}/>
            </div>
            <div>
               <label>Comments</label>
               <input onChange={this.ChangeComment} type='text' value={comment}/>
            </div>
            <div>
                <label>Topic</label>
                <select  onChange={this.ChangeTopic} value={topic}>
                <option>React</option>
                <option>Angular</option>
                <option>Vue</option>
                <option>Electron</option>
                </select>
            </div>
            <div>
            <button type='submit'>submit</button>
            </div>
            </form>
        );
    }
}

export default Form;