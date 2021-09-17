import React,{useReducer} from 'react';
import '../../App.css';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const CountContext = React.createContext()

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

function MainComponent() {
    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
        <div>
            <h1>Count = {count}</h1>
            <ComponentA />
            <ComponentB />
            <ComponentC />
        </div>
        </CountContext.Provider>
    );
}

export default MainComponent;