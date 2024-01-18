function aplicarFuncao( numero: number , funcao: (x: number) => number):number {
 return funcao(numero)
}


const resu = aplicarFuncao(20, (x) => x *  5)

console.log(resu)