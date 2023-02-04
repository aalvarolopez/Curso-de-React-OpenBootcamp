export class Contact {

    name = '';
    surename = '';
    email = '';
    connected = false;

    constructor(name, surename, email, connected) {
        this.name = name;
        this.surename = surename;
        this.email = email;
        this.connected = connected;
    }
}