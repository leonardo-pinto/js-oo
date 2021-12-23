import { Account } from "./Account.js";

export class AccountRegular extends Account {
    static numberAccountRegular = 0;

    constructor(client, agency) {
        super(client, agency, 0);
        AccountRegular.numberAccountRegular += 1;
    }

    withdraw(amount) {
        let fee = 1.0;
        return super._withdraw(amount, fee);
    }
}