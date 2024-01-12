"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 1000) + 1;
    }
}
class contaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`conta pf criada: ${titular}`);
    }
}
class contaPj extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`conta pf criada: ${titular}`);
    }
}
const conta1 = new contaPF(432, "darick");
const conta2 = new contaPF(423, "darick");
console.log(conta2.numero);
