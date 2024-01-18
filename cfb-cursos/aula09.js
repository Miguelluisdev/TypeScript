var Comp = /** @class */ (function () {
    function Comp(nome, processador, ram, placaV) {
        this.nome = nome;
        this.processador = processador;
        this.ram = ram;
        this.placaV = placaV;
    }
    Comp.prototype.info = function () {
        console.log(computador);
        console.log(computador2);
        console.log(computador3);
        console.log("--------------------------");
    };
    return Comp;
}());
var computador = new Comp("rapidão", "comp1", 8, "gtx1650");
var computador2 = new Comp("nasa", "comp2", 32, "rtx3080");
var computador3 = new Comp("gamer", "comp3", 16, "rx570");
computador.info();
computador2.info();
computador3.info();
