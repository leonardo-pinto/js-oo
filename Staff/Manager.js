import { Staff } from "./Staff.js";

export class Manager extends Staff {
    constructor(name, cpf, wage) {
        super(name, cpf, wage);
        this._bonus = 1.1;
    }
}