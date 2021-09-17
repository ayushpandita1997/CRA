import React from 'react';
import useReusableCounterHook from './useReusableCounterHook';

function Counter1() {

const [state,inc,dec,reset] = useReusableCounterHook(0,1)

    return (
        <div>
           <h1>Counter - {state}</h1>
           <button onClick={inc}>+</button> 
           <button onClick={dec}>-</button> 
           <button onClick={reset}>Reset</button> 
        </div>
    );
}

export default Counter1;