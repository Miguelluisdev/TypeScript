var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Pessoa.prototype.getCpf = function () {
        return this.cpf;
    };
    return Pessoa;
}());
var passoa = new Pessoa("João", 30, "123.456.789-00");
console.log(passoa.nome); // João
// passoa.idade = 31; // OK
// console.log(passoa.cpf); // Erro: Acesso a membro privado
