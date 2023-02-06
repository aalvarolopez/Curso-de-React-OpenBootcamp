/**
 * useState hook example
 * 
 * create a function component, access to his private state through a hook and modify it
 * 
 * rfc
 */
import React, { useState } from 'react';

const Ejemplo1 = () => {

    // initial value for a counter
    const initialValue = 0;

    // initial value for a Person
    const initialPerson = {
        name: 'Álvaro',
        email: 'alvaroalvaro1997@gmail.com'
    }

    /**
     * we want initialvalue and initialperson to be part of the component's state in order to
     * manage their change to be reflected in the component's view
     * 
     * const [var, functionToChange] = useState(initial)
     */

    const [counter, setCounter] = useState(initialValue);
    const [person, setPerson] = useState(initialPerson);

    /**
     * Function to update the state of the counter
     */
    function incrementCounter() {
        setCounter(counter + 1);
    }

    
    function updatePerson() {
        setPerson({
            name: 'Juan',
            email: 'juan@gmail.com'
        })
    }

    return (
        <div>
            <h1>*** useState() example ***</h1>
            <h2>COUNTER: {counter} </h2>
            <h2>PERSON DATA</h2>
            <h3>NAME: {person.name}</h3>
            <h3>EMAIL: {person.email}</h3>
            <button onClick={incrementCounter}>Increment counter</button>
            <button onClick={updatePerson}>Update person</button>
        </div>
    );
}

export default Ejemplo1;


