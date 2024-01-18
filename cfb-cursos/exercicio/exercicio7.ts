function processarEntrada(dado: string | number): string | number {
  if ( typeof dado === 'string'){
    return dado + ' ttypescript'
  } else {
    return dado * 6
  }
}
const resultadoString = processarEntrada('Hello');
console.log(resultadoString); 

const resultadoNumero = processarEntrada(5);
console.log(resultadoNumero);