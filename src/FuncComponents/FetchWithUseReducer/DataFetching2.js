import React,{useEffect,useReducer} from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    error:'',
    post:{}
}

const reducer = (state,action) => {
switch(action.type){
    case 'Success':
        return {
            loading: false,
            post: action.payload,
            error:''
        }
        case 'Failure':
            return {
                loading: false,
                post: {},
                error:'Something Went Wrong'
            }
}
}

function DataFetching2() {

    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(data => {
            dispatch({type:'Success',payload:data.data})
        })
        .catch(error => {
            dispatch({type:'Failure'})
        })
           },[])

    return (
        <div>
            {state.loading ? "Loading" : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
}

export default DataFetching2;