import React from 'react';

function ErrorHandlingLifecycle(props) {
    if(props.heroName === "AYUSH"){
        throw new Error('NOT A HERO')
    }
    return (
        <div>
            {props.heroName}
        </div>
    );
}

export default ErrorHandlingLifecycle;