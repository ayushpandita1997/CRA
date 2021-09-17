import React from 'react';

function Event() {

const ClickHandler = () => {
console.log('button clicked')
    }

    return (
        <div className="event">
          <button onClick = {ClickHandler}>Click</button>  
        </div>
    );
}

export default Event;