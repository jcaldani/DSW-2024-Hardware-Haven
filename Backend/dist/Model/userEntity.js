import crypto from 'node:crypto';
export class User {
    constructor(Name, Passwrod) {
        this.id = crypto.randomUUID();
        this.name = Name;
        this.password = Passwrod;
    }
}
//# sourceMappingURL=userEntity.js.map