import React,{useContext} from 'react';
import {CountContext} from './MainComponent';

function ComponentF() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component F = {countContext.countState}
            <button onClick={()=>countContext.countDispatch('inc')}>+</button>
            <button onClick={()=>countContext.countDispatch('dec')}>-</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        </div>
    );
}

export default ComponentF;