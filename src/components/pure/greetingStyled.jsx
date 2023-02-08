import React, { useState } from 'react';
import PropTypes from 'prop-types';

// defining styles in constants

// ? Style for logged user
const loggedStyle = {
    color: 'white',
    fontWeight: 'bold'
}

// ? Style for unlogged user
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    // generate state for the component and control if user is logged or not
    const [logged, setLogged] = useState(false);
    const greetingUser = (<p>Hello, { props.name }</p>);
    const plsLogin = (<p>Please login</p>);


    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ? greetingUser : plsLogin}
            <button onClick={() => {
                console.log('Button pressed');
                setLogged(!logged);
            }}> { logged ? 'Logout' : 'Login' }</button>
        </div>
    );
};


GreetingStyled.propTypes = {

};


export default GreetingStyled;
