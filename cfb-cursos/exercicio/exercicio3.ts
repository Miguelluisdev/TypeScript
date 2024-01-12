abstract class Account {
  numero: string;
  saldo: number;

  constructor(numero: string, saldo: number) {
    this.numero = numero;
    this.saldo = saldo;
  }

  abstract sacar(valor: number): void;
  abstract depositar(valor: number): void;
}

class ContaCorrente extends Account {
  sacar(valor: number): void {
    this.saldo -= valor;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }
}

class ContaPoupanca extends Account {
  sacar(valor: number): void {
    this.saldo -= valor;
  }

  depositar(valor: number): void {
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
