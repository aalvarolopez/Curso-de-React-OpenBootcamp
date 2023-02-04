import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactStateComponent from './contactState';


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
            <ContactStateComponent state={ contact.state }></ContactStateComponent>
        </div>
    );
};


ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default ContactComponent;
