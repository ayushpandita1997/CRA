import React,{useState} from 'react';

function FormHook1() {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        alert(`${firstName} ${lastName} Has Submitted The Form`)
        reset()
    }
  
const reset = () => {
    setFirstName('')
    setLastName('')
}

    return (
        <div>
            <form onSubmit={submitForm}>
            <div>
            <label>Firstname: </label>
            <input onChange={(e) => setFirstName(e.target.value)} type="text" value={firstName} />
            </div>

            <div>
            <label>Lastname: </label>
            <input onChange={(e) => setLastName(e.target.value)} type="text" value={lastName} />
            </div>
            <button className="addCss" type="submit">Click To Submit</button>
            </form>
        </div>
    );
}

export default FormHook1;

var points = [40, 100, 1, 5, 25, 10];


const num = (a,b)=>{
return b-a
}
console.log(points.sort(num))