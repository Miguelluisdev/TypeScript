"use strict";
class Comp {
    nome;
    processador;
    ram;
    placaV;
    constructor(nome, processador, ram, placaV) {
        this.nome = nome;
        this.processador = processador;
        this.ram = ram;
        this.placaV = placaV;
    }
    info() {
        console.log(computador);
        console.log(computador2);
        console.log(computador3);
        console.log("--------------------------");
    }
}
const computador = new Comp("rapidão", "comp1", 8, "gtx1650");
const computador2 = new Comp("nasa", "comp2", 32, "rtx3080");
const computador3 = new Comp("gamer", "comp3", 16, "rx570");
computador.info();
computador2.info();
computador3.info();
