import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ContactStateComponent = ({ state }) => {

    const [connected, setConnected] = useState(state);

    const changeState = () => {
        setConnected(!connected)
    }

    return (
        <div>
            <h3> {connected === true ? 'Contact online' : 'Contact offline'}</h3>
            <button onClick={ changeState }> {connected === true ? 'Disconnect' : 'Connect'}</button>
        </div>
    );
};


ContactStateComponent.propTypes = {
    state : PropTypes.bool,
};


export default ContactStateComponent;
