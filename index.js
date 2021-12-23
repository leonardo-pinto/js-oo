import { Client } from './Client.js';
import { Account } from './Account.js';

const client1 = new Client("José", 123456);
const joseAccount = new Account(48, client1);
const client2 = new Client("Rick", 654321);
const rickAccount = new Account(45, client2);

// rickAccount.client = 55; caso a atribuição não seja uma instância de cliente, nada é feito!

joseAccount.deposit(150);
joseAccount.transference(25, rickAccount);


console.log(joseAccount);
console.log(rickAccount);
console.log(Account.accountsNumber);
