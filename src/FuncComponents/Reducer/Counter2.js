import React,{useReducer} from 'react';

const initialState = {firstCounter:0,secondCounter:0}

const reducer = (state,action) => {
switch(action.type){
    case 'inc' :
        return {...state,firstCounter: state.firstCounter + action.value}
        case 'dec' :
            return {...state,firstCounter: state.firstCounter - action.value}
            case 'reset' :
                return initialState
                case 'inc1' :
                    return {...state,secondCounter: state.secondCounter + action.value}
                    case 'dec1' :
                        return {...state,secondCounter: state.secondCounter - action.value}
                        case 'reset1' :
                            return initialState
                            default :
                                return state
}

}

function Counter2() {

  const [count,dispatch] = useReducer(reducer,initialState)

    return (
        <div>
            <h1>Counter 1 = {count.firstCounter}</h1>
            <h1>Counter 2 = {count.secondCounter}</h1>
            
            <button onClick={()=>dispatch({type: 'inc', value:1 })}>+</button>
            <button onClick={()=>dispatch({type: 'dec',value:1 })}>-</button>
            <button onClick={()=>dispatch({type: 'inc',value:5 })}>➕</button>
            <button onClick={()=>dispatch({type: 'dec',value:5 })}>➖</button>
            <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>

            <button onClick={()=>dispatch({type: 'inc1', value:1 })}>+</button>
            <button onClick={()=>dispatch({type: 'dec1',value:1 })}>-</button>
            <button onClick={()=>dispatch({type: 'inc1',value:5 })}>➕</button>
            <button onClick={()=>dispatch({type: 'dec1',value:5 })}>➖</button>
            <button onClick={()=>dispatch({type: 'reset1'})}>Reset</button>
        </div>
    );
}

export default Counter2;