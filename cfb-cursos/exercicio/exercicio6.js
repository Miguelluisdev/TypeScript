function showPeo(pessoa) {
    console.log("nome: ".concat(pessoa.name, " , idade: ").concat(pessoa.idade, " , email: ").concat(pessoa.email));
}
var peoExemplo = { name: "darius", idade: 24, email: "darius@exemple" };
showPeo(peoExemplo);
