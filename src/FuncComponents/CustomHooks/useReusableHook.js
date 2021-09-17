import {useEffect} from 'react';

function useReusableHook(state) {

    useEffect(() => {
        document.title = `Count is ${state}`
        },[state])
}

export default useReusableHook;