import React, {useState,useEffect} from 'react';

function HookMouse() {

    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

const findCoords = (e) => {
    console.log("Event called")
setX(e.clientX)
setY(e.clientY)
}

    useEffect(()=>{
      console.log("useEffect called")
      window.addEventListener('mousemove',findCoords)

      return ()=>{
         window.removeEventListener('mousemove',findCoords)
      }
    },[])

    return (
        <div>
            Hooks X - {x}  Y - {y}
        </div>
    );
}

export default HookMouse;