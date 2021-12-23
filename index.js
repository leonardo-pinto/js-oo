import { AccountRegular } from './Account/AccountRegular.js';
import { AccountSaving } from './Account/AccountSaving.js';
import { Authentication } from './Authentication/Authentication.js';
import { Client } from './Client/Client.js';
import { Director } from './Staff/Director.js';
import { Manager } from './Staff/Manager.js';
// import { Account } from './Account.js';
// import { SavingAccount } from './SavingAccount.js';

// const client1 = new Client("José", 123456);
// const joseRegularAccount = new AccountRegular(client1, 1001);
// const joseSavingAccount = new AccountSaving(client1, 1001, 300);

// rickAccount.client = 55; caso a atribuição não seja uma instância de cliente, nada é feito!

// joseAccount.deposit(150);
// joseAccount.transference(25, joseSavingAccount);
// joseSavingAccount.withdraw(20);
// joseRegularAccount.deposit(100);
// joseRegularAccount.withdraw(10);

// const errorTest = new Account(client1, 1001);
// console.log(errorTest);

const directorExample = new Director("Morty", 5558, 5000);
directorExample.registerPassword('xablau');

const isLoggedIn = Authentication.login(directorExample, 'xablau');

const newClient = new Client("Ricky", 555, 'chama');
console.log(Authentication.login(newClient, 'chamfa'));
// const managerExample = new Manager("Ricky", 98565, 3000);
// console.log(directorExample);
// console.log(managerExample);
