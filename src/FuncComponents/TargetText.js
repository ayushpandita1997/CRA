import React, {useState} from 'react';

function TargetText() {

    const [text, setText] = useState({firstname:'',lastname:''})

const type = (e) => {
    setText({...text,firstname:e.target.value})
}

const type1 = (e) => {
    setText({...text,lastname:e.target.value})
}

    return (
      
            <form>
                <input type="text" value={text.firstname} onChange={type}></input>
                <input type="text" value={text.lastname} onChange={type1}></input>



                <h1>My first name is - {text.firstname}</h1>
                <h1>My last name is - {text.lastname}</h1>
            </form>
       
    );
}

export default TargetText;