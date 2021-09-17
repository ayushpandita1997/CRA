import React,{useContext} from 'react';
import {CountContext} from './MainComponent';

function ComponentD() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component D = {countContext.countState}
            <button onClick={()=>countContext.countDispatch('inc')}>+</button>
            <button onClick={()=>countContext.countDispatch('dec')}>-</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        </div>
    );
}

export default ComponentD;