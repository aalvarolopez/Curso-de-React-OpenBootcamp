/**
 * Example of:
 *  - useState()
 *  - useRef()
 *  - useEffect()
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    // 2 counters w/ different states

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    // create a reference using useRef() to link a var with an element of the DOM

    const myRef = useRef();

    function increment1() {
        setCounter1(counter1 + 1);
    }

    function increment2() {
        setCounter2(counter2 + 1);
    }

    /**
     * working with useEffect
     */

    /**
     * ? Case 1: Execute always a snippet of code 
     * any time there is a change in the state of the component whichever is in the useEffect() is executed
     */

    // useEffect(() => {
    //     console.log('CHANGE IN THE STATE OF THE COMPONENT');
    //     console.log('Showing reference to the DOM element');
    //     console.log(myRef);
    // });

    /**
     * ? Case 2: Execute only when counter1 changes
     */
    // useEffect(() => {
    //     console.log('CHANGE IN THE STATE OF THE COUNTER 1');
    //     console.log('Showing reference to the DOM element');
    //     console.log(myRef);
    // }, [counter1]);

     /**
     * ? Case 3: Execute only when counter1 or counter2 changes
     */
     useEffect(() => {
        console.log('CHANGE IN THE STATE OF THE COUNTER 1 or COUNTER2');
        console.log('Showing reference to the DOM element');
        console.log(myRef);
    }, [counter1, counter2]);
    


    return (
        <div>
             <h1>*** useState(), useRef() and useEffect() example ***</h1>
             <h2>COUNTER 1: {counter1}</h2>
             <h2>COUNTER 2: {counter2}</h2>
             {/* Referenced element */}
             <h4 ref={myRef}> Example of referenced element </h4>
             <div>
                <button onClick={increment1}>Increment counter 1</button>
                <button onClick={increment2}>Increment counter 2</button>
             </div>
        </div>
    );
}

export default Ejemplo2;
