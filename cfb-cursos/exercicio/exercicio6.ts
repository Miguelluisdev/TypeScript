interface Peo {
  name: string,
  idade: number ,
  email?: string,
}

function showPeo(pessoa: Peo){
  console.log(`nome: ${pessoa.name} , idade: ${pessoa.idade} , email: ${pessoa.email}`)
}

const peoExemplo : Peo = {name: "darius" , idade: 24, email:"darius@exemple"}

showPeo(peoExemplo)