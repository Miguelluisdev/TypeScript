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
var Conta = /** @class */ (function () {
    function Conta(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    Conta.prototype.gerarNumeroConta = function () {
        return Math.floor(Math.random() * 1000) + 1;
    };
    return Conta;
}());
var contaPF = /** @class */ (function (_super) {
    __extends(contaPF, _super);
    function contaPF(cpf, titular) {
        var _this = _super.call(this, titular) || this;
        _this.cpf = cpf;
        console.log("conta pf criada: ".concat(titular));
        return _this;
    }
    return contaPF;
}(Conta));
var contaPj = /** @class */ (function (_super) {
    __extends(contaPj, _super);
    function contaPj(cnpj, titular) {
        var _this = _super.call(this, titular) || this;
        _this.cnpj = cnpj;
        console.log("conta pf criada: ".concat(titular));
        return _this;
    }
    return contaPj;
}(Conta));
var conta1 = new contaPF(432, "darick");
var conta2 = new contaPF(423, "darick");
console.log(conta2.numero);
