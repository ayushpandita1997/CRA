import React from 'react';
import useReusableCounterHook from './useReusableCounterHook';

function Counter2() {

    const [state,inc,dec,reset] = useReusableCounterHook(10,2);
    return (
        <div>
           <h1>Counter - {state}</h1>
           <button onClick={inc}>+</button> 
           <button onClick={dec}>-</button> 
           <button onClick={reset}>Reset</button> 
        </div>
    );
}

export default Counter2;