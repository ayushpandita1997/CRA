import React,{useState,useEffect} from 'react';
import axios from 'axios';

function FetchUseEffect() {

    const [fetch,setFetch] = useState([])

    useEffect(() => {
axios.get('https://jsonplaceholder.typicode.com/posts/')
.then((data)=>{
    console.log(data.data)
    setFetch(data.data)
})
    .catch((e)=>{
        console.log(e.message)
})

    },[])

    return (
        <div>
            <ul>
            {fetch.map( data => <li key={data.id}>{data.title}</li>)}
            </ul>
        </div>
    );
}

export default FetchUseEffect;