"use strict";
class Pessoa {
    nome;
    idade;
    cpf;
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    getNome() {
        return this.nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    getCpf() {
        return this.cpf;
    }
}
const passoa = new Pessoa("João", 30, "123.456.789-00");
console.log(passoa.nome);
