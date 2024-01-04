class Pessoa {
  public nome: string;
  private idade: number;
  protected cpf: string;

  constructor(nome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
  }

  public getNome() {
    return this.nome;
  }

  public setIdade(idade: number) {
    this.idade = idade;
  }

  protected getCpf() {
    return this.cpf;
  }
}

const passoa = new Pessoa("João", 30, "123.456.789-00");

console.log(passoa.nome); // João
// passoa.idade = 31; // OK
// console.log(passoa.cpf); // Erro: Acesso a membro privado
