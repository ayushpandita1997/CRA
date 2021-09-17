import React,{useState} from 'react';
import useReusableHook from './useReusableHook';

function Hook1() {

const [state,setState] = useState(0)

useReusableHook(state)

    return (
        <div>
            <h1>Counter - {state}</h1>
            <button onClick={()=>{setState(state+1)}}>+</button>
        </div>
    );
}

export default Hook1;