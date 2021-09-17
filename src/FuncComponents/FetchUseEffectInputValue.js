import React,{useState,useEffect} from 'react';
import axios from 'axios';

function FetchUseEffectInputValue() {

    const [fetch,setFetch] = useState({})
    const [id,setId] = useState(1)
    const [aData,setaData] = useState()

    const fetchData = ()=> {
        setaData(id)
    }
    
    useEffect(() => {
axios.get(`https://jsonplaceholder.typicode.com/posts/${aData}`)
.then((data)=>{
    console.log(data.data)
    setFetch(data.data)
})
    .catch((e)=>{
        console.log(e.message)
})

    },[aData])


    return (
        <div>
        <input type="text" value={id} onChange={e=> setId(e.target.value)} />
        <h1>{fetch.title}</h1>
        <button onClick={fetchData}>Fetch Data</button>
    </div>
    );
}

export default FetchUseEffectInputValue;