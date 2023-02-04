import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contact("Álvaro", "Álvaro López", "alvaroalvaro1997@gmail.com", false)

    return (
        <div>
            <h1>
                Contacts
            </h1>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};


export default ContactListComponent;
