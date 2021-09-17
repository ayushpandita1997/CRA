import React,{useReducer} from 'react';

const initialState = 0

const reducer = (state,action) => {
switch(action){
    case 'inc' :
        return state+1
        case 'dec' :
            return state-1
            case 'reset' :
                return initialState
                default :
                    return state
}

}

function Counter3() {

  const [count,dispatch] = useReducer(reducer,initialState)
  const [count1,dispatch1] = useReducer(reducer,initialState)

    return (
        <div>
            <h1>Count - {count}</h1>
            <button onClick={()=>dispatch('inc')}>+</button>
            <button onClick={()=>dispatch('dec')}>-</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>

            <h1>Count1 - {count1}</h1>
            <button onClick={()=>dispatch1('inc')}>+</button>
            <button onClick={()=>dispatch1('dec')}>-</button>
            <button onClick={()=>dispatch1('reset')}>Reset</button>
        </div>
    );
}

export default Counter3;