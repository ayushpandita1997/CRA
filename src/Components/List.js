import React from 'react';

function List() {
    const numbers = [1,2,3,4]
    const names = ['ayush','anu','pandita','bhat']
    return (
        <div className='con'>
            {numbers.map((a,i)=> <h1 key={i}>{a*2}</h1>)}
            <h2>{names.map((a,i)=><h2 key={i}>{a}</h2>)}</h2>
            
        </div>
    );
}

export default List;