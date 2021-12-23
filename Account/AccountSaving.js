import { Account } from "./Account.js";

export class AccountSaving extends Account {
    static numberAccountSaving = 0;

    constructor(client, agency, initialBalance) {
        super(client, agency, initialBalance);
        AccountSaving.numberAccountSaving += 1;
    }

    withdraw(amount) {
        let fee = 1.1;
        return super._withdraw(amount, fee);
    }
}