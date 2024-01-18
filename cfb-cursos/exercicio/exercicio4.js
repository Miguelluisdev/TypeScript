function aplicarFuncao(numero, funcao) {
    return funcao(numero);
}
var resu = aplicarFuncao(20, function (x) { return x * 5; });
console.log(resu);
