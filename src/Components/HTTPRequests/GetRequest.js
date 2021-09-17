import React, { Component } from 'react';
import axios from 'axios';

class GetRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errMsg: ''
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(arr => {console.log(arr.data)
        this.setState ({
            posts: arr.data
        })
    }) 
        .catch((error)=>{console.log(error)
            this.setState ({
                errMsg: "Something Went Wrong"
            })
        })
    }

    render() {
        const {posts,errMsg} = this.state;
        return (
            <div>
               <h1>List</h1> 
               {
               posts.length ?
               posts.map( a => <h1 key={a.id}>{a.title} </h1>) :
               errMsg
            }
            </div>
        );
    }
}

export default GetRequest;