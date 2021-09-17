import React from 'react';
import Fragment2 from './Fragment2';

// function Fragment(props) {
//     return (
//         <React.Fragment>
//             <h1>Fragment</h1>
//         </React.Fragment>
//     );
// }

// export default Fragment;


function Fragment1() {
    return (
            <table>
                <tbody>
                    <tr>
                    <Fragment2 />
                    </tr>
                </tbody>
            </table>
    );
}

export default Fragment1;