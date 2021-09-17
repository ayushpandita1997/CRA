import React,{useState} from 'react';

const File = ()=>{
   
  const [state,setState] = useState({done: true});

  const items = [ { text: 'Buy grocery', done: true },
{ text: 'Play guitar', done: false },
{ text: 'Romantic dinner', done: false }
];

if(state.done){
    return true;
}

  return(
    <div>
{items.map((value)=>{
return(
    <div>
   
  <input type="checkbox"  />{value.text}
  </div>
)
})}
    </div>
  )
}

export default File;