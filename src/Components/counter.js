import React,{Component} from 'react'

class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    incCount = () => {
this.setState ({
count: this.state.count+1
},()=>{console.log('callback value =',this.state.count)})
    }

    decCount = () => {
this.setState ({
    count: this.state.count-1
})
    }

render(){
    return(
    <div>
        <h1 className="counter">Counter = {this.state.count}</h1>
        <button onClick={()=>{this.incCount()}}>+</button>
        <button onClick={()=>{this.decCount()}}>-</button>
    </div>
)}  
}

export default Counter;