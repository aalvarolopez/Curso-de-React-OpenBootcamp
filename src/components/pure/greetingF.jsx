import React, { useState } from 'react';
import PropTypes from 'prop-types';

// rfcp to generate

const GreetingF = (props) => {

    // Brief intro to useState
    const [age, setAge] = useState(25);

    const birthday = () => {
        // update the State +1 
        setAge(age +1)
    }

    const birthdaynt = () => {
        // update the State -1
        setAge(age -1)
    }

    return (
        <div>
            <h1>
                ¡Hello {props.name} from functional component!
            </h1>
            <h2>
                Your age is: {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Birth day
                </button>
            </div>
            <div>
                <button onClick={birthdaynt}>
                    Birth daynt
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {

    name: PropTypes.string,
};


export default GreetingF;
