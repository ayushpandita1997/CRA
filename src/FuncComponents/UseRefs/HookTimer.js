import React,{useState,useRef, useEffect} from 'react';

function HookTimer() {

    const [count,setCount] = useState(0)
    const intervalRef = useRef()

    useEffect(()=>{
    intervalRef.current = setInterval(()=>{
       setCount(prevTimer => prevTimer+1)
    },1000)

    return () => {clearInterval(intervalRef.current)}
    },[])

    return (
        <div>
            Counter = {count}
            <button onClick={()=>(clearInterval(intervalRef.current))}>Stop Timer</button>
        </div>
    );
}

export default HookTimer;