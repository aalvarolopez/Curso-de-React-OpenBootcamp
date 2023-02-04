import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ( {contact} ) => {

    return (
        <div>
            <h2>
                Name: { contact.name }
            </h2>
            <h2>
                Surename: { contact.surename }
            </h2>
            <h2> 
                Email: { contact.email} 
            </h2>
            <h2>
                { contact.connected ? 'Contact online' : 'Contact offline'}
            </h2>
        </div>
    );
};


ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default ContactComponent;
