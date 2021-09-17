import React,{useState,useMemo,useEffect, useCallback} from 'react';

function UseMemo() {

    const [counter1,setCounter1] = useState(0)
    const [counter2,setCounter2] = useState(0)

const inc1 = () => {
    setCounter1(counter1+1)
}

const inc2 = () => {
    setCounter2(counter2+1)
}

const isEven = useMemo(() => {
    let i = 0
    while(i<200000000) i++
console.log("hii")
    return (counter1 % 2 === 0)
    },[counter1])
    

    return (
        <div>
        <div>
            <button onClick={inc1}>Counter1 = {counter1}</button>
            <span>{isEven ? "Even Number" : "Odd Number"}</span>
            </div>
            <div>
            <button onClick={inc2}>Counter2 = {counter2}</button>
        </div>
        </div>
    );
}

export default UseMemo;