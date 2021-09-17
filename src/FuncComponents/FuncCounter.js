import React, {useState} from 'react';

function FuncCounter() {

 const initstate = 0
 const [counter,setCounter] = useState(initstate)

    return (
        <div>
           <h1>counter = {counter}</h1>
           <button onClick={()=>setCounter(counter+1)}>+</button> 
           <button onClick={()=>setCounter(counter-1)}>-</button> 
           <button onClick={()=>setCounter(initstate)}>RESET</button> 
        </div>
    );
}

export default FuncCounter;