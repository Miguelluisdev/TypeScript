// Classe Pilha Genérica
var Pilha = /** @class */ (function () {
    function Pilha() {
        this.elementos = [];
    }
    Pilha.prototype.empilhar = function (elemento) {
        this.elementos.push(elemento);
    };
    Pilha.prototype.desempilhar = function () {
        return this.elementos.pop();
    };
    return Pilha;
}());
var pilhaDeNumeros = new Pilha();
pilhaDeNumeros.empilhar(1);
pilhaDeNumeros.empilhar(2);
console.log(pilhaDeNumeros.desempilhar()); // Saída: 2
var pilhaDeStrings = new Pilha();
pilhaDeStrings.empilhar("A");
pilhaDeStrings.empilhar("B");
console.log(pilhaDeStrings.desempilhar()); // Saída: "B"
