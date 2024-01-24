function isNumber(value: any): value is number {
  return typeof value === 'number';
}

// Uso do type guard
let x: any = 5;

if (isNumber(x)) {
  console.log(x + 10); // Aqui, x é tratado como número
}

class Animal {
  move() {
    console.log('Moving...');
  }
}

class Bird extends Animal {
  fly() {
    console.log('Flying...');
  }
}

function isBird(obj: any): obj is Bird {
  return obj instanceof Bird;
}

// Uso do type guard
let pet: Animal = new Bird();

if (isBird(pet)) {
  pet.fly(); // Aqui, pet é tratado como uma instância de Bird
} else {
  pet.move(); // Aqui, pet é tratado como uma instância de Animal
}

type alfanumerico = string | number;

function exibirTipo(a: alfanumerico , b: alfanumerico){
  if (typeof a === 'number'  && typeof b === 'number'){
    return a  + b
  }
  if (typeof a === 'string'  && typeof b === 'string'){
    return a.concat(b)
  }

  throw new console.error();
  
}

console.log(exibirTipo('darius' , 2))
console.log(exibirTipo(9 , 6))

class Carro {
  nome: string;
  marca: string;

  constructor(nome: string, marca: string) {
    this.nome = nome;
    this.marca = marca;
  }
}

class Moto {
  nome: string;
  ano: number;

  constructor(nome: string, ano: number) {
    this.nome = nome;
    this.ano = ano;
  }
}

function detalhesVeiculo(veiculo: Carro | Moto) {
  if (veiculo instanceof Carro) {
    return `O nome do carro é: ${veiculo.nome} e a marca é: ${veiculo.marca}`;
  } else if (veiculo instanceof Moto) {
    return `O nome da moto é: ${veiculo.nome} e o ano é: ${veiculo.ano}`;
  }
}

const carro = new Carro('Gol', 'Volkswagen');
console.log(detalhesVeiculo(carro));

const moto = new Moto('CBR', 2020);
console.log(detalhesVeiculo(moto));


interface Animal_05 {
  grupo: string;
}

class Peixe implements Animal_05 {
  grupo: string;
  corPeixe: string;

  constructor(grupo: string, corPeixe: string) {
    this.grupo = grupo;
    this.corPeixe = corPeixe;
  }
}

class Passaro implements Animal_05 {
  grupo: string;
  corPena: string;

  constructor(grupo: string, corPena: string) {
    this.grupo = grupo;
    this.corPena = corPena;
  }
}

function nadar(grupo: string) {
  console.log(`O ${grupo} está nadando!`);
}

function voar(grupo: string) {
  console.log(`O ${grupo} está voando!`);
}

function mover(animal: Animal_05) {
  if ('corPeixe' in animal) {
    nadar((animal as Peixe).grupo);
  } else if ('corPena' in animal) {
    voar((animal as Passaro).grupo);
  }
}

mover(new Passaro('Pássaro', 'Vermelho'));
mover(new Peixe('Peixe', 'Azul'));