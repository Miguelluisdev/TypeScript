"use strict";
class Pilha {
    elementos = [];
    empilhar(elemento) {
        this.elementos.push(elemento);
    }
    desempilhar() {
        return this.elementos.pop();
    }
}
const pilhaDeNumeros = new Pilha();
pilhaDeNumeros.empilhar(1);
pilhaDeNumeros.empilhar(2);
console.log(pilhaDeNumeros.desempilhar());
const pilhaDeStrings = new Pilha();
pilhaDeStrings.empilhar("A");
pilhaDeStrings.empilhar("B");
console.log(pilhaDeStrings.desempilhar());
