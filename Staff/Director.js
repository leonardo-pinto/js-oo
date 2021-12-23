import { Staff } from "./Staff.js";

export class Director extends Staff {
    constructor(name, cpf, wage) {
        super(name, cpf, wage);
        this._bonus = 1.2;
    }
}