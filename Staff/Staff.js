export class Staff {
    constructor(name, cpf, wage) {
        this._name = name;
        this._cpf = cpf;
        this._wage = wage;
        this._bonus = 1.0;
        this._password;
    }

   authentication(password) {
       return this._password === password;
   }

    registerPassword(password) {
        this._password = password;
    }
}