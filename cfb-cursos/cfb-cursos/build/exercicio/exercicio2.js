"use strict";
function indentificarTipo(valor) {
    if (typeof valor === "string") {
        console.log("é string");
    }
    else if (typeof valor === "number") {
        console.log("number");
    }
    else {
        console.log("não possui valor");
    }
}
