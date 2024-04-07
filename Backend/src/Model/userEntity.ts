import crypto from 'node:crypto'

export class User {
    id: string;
    name: string;
    password: string;

    constructor(Name: string, Passwrod: string) {
        this.id = crypto.randomUUID();
        this.name = Name;
        this.password = Passwrod;
    }
}
