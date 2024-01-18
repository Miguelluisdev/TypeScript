var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    return Account;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaCorrente.prototype.sacar = function (valor) {
        this.saldo -= valor;
    };
    ContaCorrente.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    return ContaCorrente;
}(Account));
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaPoupanca.prototype.sacar = function (valor) {
        this.saldo -= valor;
    };
    ContaPoupanca.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    return ContaPoupanca;
}(Account));
var contaCorrente = new ContaCorrente("123456", 1000);
var contaPoupanca = new ContaPoupanca("789012", 500);
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
