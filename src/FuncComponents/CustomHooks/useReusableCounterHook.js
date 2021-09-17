import {useState} from 'react';

function useReusableCounterHook(initValue,value) {

    const [state,setState] = useState(initValue)

    const inc = () => {
        setState(prevCount => prevCount + value)
    }
    const dec = () => {
        setState(prevCount => prevCount - value)
    }
    const reset = () => {
        setState(initValue)
    }

    return (
        [state,inc,dec,reset]
    );
}

export default useReusableCounterHook;