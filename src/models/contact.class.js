export class Contact {

    name = '';
    sureName = '';
    email = '';
    connected = false;

    constructor(name, sureName, email, connected) {
        this.name = name;
        this.sureName = sureName;
        this.email = email;
        this.connected = connected;
    }
}