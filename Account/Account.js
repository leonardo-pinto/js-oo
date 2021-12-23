// classe abstrata

export class Account {
    constructor(client, agency, initialBalance) {
        if (this.constructor === Account) {
            throw new Error ('New instance of Account class is forbidden')
        }
        this._client = client;
        this._agency = agency;
        this._balance = initialBalance;
    }

    // set client(client) {
    //     if (client instanceof Client) {
    //         this._client = client;
    //     }
    // }

    // get client() {
    //     console.log('client')
    //     return this._client;
    // }

    // get balance() {
    //     return this._balance;
    // }

    withdraw() {
        throw new Error ('withdraw is an abstract method');
    }

    _withdraw(amount, fee) {
        const withdrawValue = fee * amount;
        if (this._balance <= withdrawValue) return 0;
        this._balance -= withdrawValue;
        return withdrawValue;
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
