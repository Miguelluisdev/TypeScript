 let numeros: number[]= [20,30,40]

 numeros.push(10)

 let numeros_ro:ReadonlyArray<number>=[1000,900,800]
//  somente leitura ,não pode ser modificado

const arrayOriginal = [1, 2, 3] as const;
const meuArray: readonly number[] = arrayOriginal;

// Agora, meuArray é somente leitura
// meuArray.push(4); // Erro!
// meuArray[0] = 0; // Erro!
