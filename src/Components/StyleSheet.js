import React from 'react';

const sty = {
    fontSize: "72px",
    color: "red"
}

function StyleSheet(props) {

    return (
        <div>
           <h1 style={sty}>Styling</h1> 
        </div>
    );
}

export default StyleSheet;