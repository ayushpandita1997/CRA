import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './Action/CounterRedux';

const RCounter = () => {
    const myState = useSelector((state)=>(state.IncTheNumber));
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter - {myState}</h1>
            <button onClick={()=> dispatch(incNumber(2))}>+</button>
            <button onClick={()=> dispatch(decNumber())}>-</button>
        </div>
    );
}

export default RCounter;