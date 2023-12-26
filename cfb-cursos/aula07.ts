// Declarando uma tupla com dois elementos: uma string e um número
let minhaTupla: [string, number];

// Inicializando a tupla
minhaTupla = ["Olá", 42];

// Acesso aos elementos
console.log(minhaTupla[0]); // "Olá"
console.log(minhaTupla[1]); // 42

// Tupla representando coordenadas (latitude e longitude)
let coordenadas: [number, number] = [37.7749, -122.4194];

// Tupla representando um par chave-valor
let par: [string, number] = ["idade", 25];


let pessoa: [nome: string, idade: number];
pessoa = ["João", 30];

console.log(pessoa[0]); // "João"
console.log(pessoa[1]); // 30
