"use strict";
class Account {
    numero;
    saldo;
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
}
class ContaCorrente extends Account {
    sacar(valor) {
        this.saldo -= valor;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaPoupanca extends Account {
    sacar(valor) {
        this.saldo -= valor;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
const contaCorrente = new ContaCorrente("123456", 1000);
const contaPoupanca = new ContaPoupanca("789012", 500);
console.log("Saldo inicial da conta corrente:", contaCorrente.saldo);
contaCorrente.sacar(200);
console.log("Saldo após saque na conta corrente:", contaCorrente.saldo);
contaCorrente.depositar(300);
console.log("Saldo após depósito na conta corrente:", contaCorrente.saldo);
console.log("\nSaldo inicial da conta poupança:", contaPoupanca.saldo);
contaPoupanca.sacar(100);
console.log("Saldo após saque na conta poupança:", contaPoupanca.saldo);
contaPoupanca.depositar(200);
console.log("Saldo após depósito na conta poupança:", contaPoupanca.saldo);
