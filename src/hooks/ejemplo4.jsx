/**
 * example to understand the use of props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>*** Example of children props ***</h1>
            <h2>
                Name: { props.name }
            </h2>
            {/** props.children paint by default everything that is between opening and ending tags of this component from the parent component  */}
            { props.children }
        </div>
    );
}

export default Ejemplo4;
