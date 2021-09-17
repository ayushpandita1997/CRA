import React,{useState} from 'react';

function TargetArray() {

    const [arr,setArr] = useState([]);

const add = () => {
    setArr ([...arr, {id:arr.length,value: Math.floor(Math.random() * 10) + 1}]) 
}

    return (
        <div>
                <button onClick={add}>Add a Number</button>
            <ul>
                {
                   arr.map( a =>(<li key={a.id}>{a.value}</li>))
                }
            </ul>
        </div>
    );
}

export default TargetArray;