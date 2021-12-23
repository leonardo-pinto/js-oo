import { Client } from "./Client.js";

export class Account {
    static accountsNumber = 0;
    agency;
    _client;
    _balance = 0;

    constructor(agency, client) {
        this.agency = agency;
        this._client = client;
        Account.accountsNumber += 1;
    }

    set client(client) {
        if (client instanceof Client) {
            this._client = client;
        }
    }

    get client() {
        return this._client;
    }

    get balance() {
        return this._balance;
    }

    withdraw(amount) {
        if (this._balance <= amount) return
        this._balance -= amount;
    }

    deposit(amount) {
        if (amount <= 0) return
        this._balance += amount;
    }

    transference(amount, receiver) {
        if (this._balance <= amount) return
        this.withdraw(amount);
        receiver.deposit(amount);
    }
}
