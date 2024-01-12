interface Veiculo {
  modelo: string;
  ano: number;
}

interface Carro extends Veiculo {
  portas: number;
}

interface Moto extends Veiculo {
  cilindros: number;
}

