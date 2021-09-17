import React from 'react';

const fn = (props) => {
    return(
        <div>
        <p>Hello from React Js {props.name}</p>
        {props.children}
        </div>
    )
} 

export default fn;