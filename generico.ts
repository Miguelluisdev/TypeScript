// Crie uma função genérica que inverta a ordem de um array.
// A função deve aceitar qualquer tipo de array e retornar o array invertido.
// Não use o método reverse().

// Seu código aqui
function reverseArray<T>(arr: T[]): T[] {
  return arr.reduceRight((acc, current) => {
    acc.push(current);
    return acc;
  }, [] as T[]);
}

// Exemplo de uso:
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // Saída esperada: [5, 4, 3, 2, 1]

function teste<T, U>(nome: T, idade: U): void {
  if (typeof nome === 'string') {
    console.log(`seu nome ${nome} é string`);
  } else if (typeof idade === 'number') {
    console.log(`sua idade é ${idade} number`);
  }
}

teste("Alice", 25); // Funciona corretamente

teste(true, "Charlie"); // Ainda resultará em erro, mas agora será um erro relacionado a `U` (argumento para idade)
