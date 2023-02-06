/**
 * example hooks:
 *  - useState()
 *  - useContext()
 */

import React, { useState, useContext } from 'react';


const myContext = React.createContext(null);
/**
 * 
 * @returns Component 1
 * Has a context with a value received from the parent 
 */
const Component1 = () => {

    // initialize empty state which is gonna be filled with the parent's context data
    const state = useContext(myContext);

    return (
        <div>
            <h1>
                The token is: {state.token}
            </h1>
            {/* paint of componenty 2 */}
            <Component2></Component2>
        </div>
    );
}

const Component2 = () => {

    const state = useContext(myContext);

    return (
        <div>
            <h2>
                The session is: {state.session}
            </h2>
        </div>
    );
}

export default function MyComponentWithContext() {

    const initialState = {
        token: '12345',
        session: 1
    }

    // create the state of the component
    const [sessionData, setSessionData] = useState(initialState);

    function updateSession() {
        setSessionData({
            token: 'JWT123456789',
            session: sessionData.session + 1
        })
    }

    return (
        <myContext.Provider value={sessionData}>
            {/** everything inside here can read sessionData. Everything updates here */}
            <h1>**** Example of useState() y useContext() ****</h1>
            <Component1></Component1>
            <button onClick={updateSession}>update</button>
        </myContext.Provider>
    )
}



