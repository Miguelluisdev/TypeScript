// Classe Pilha Genérica
class Pilha<T> {
  private elementos: T[] = [];

  empilhar(elemento: T): void {
    this.elementos.push(elemento);
  }

  desempilhar(): T | undefined {
    return this.elementos.pop();
  }
}

const pilhaDeNumeros = new Pilha<number>();
pilhaDeNumeros.empilhar(1);
pilhaDeNumeros.empilhar(2);
console.log(pilhaDeNumeros.desempilhar()); // Saída: 2

const pilhaDeStrings = new Pilha<string>();
pilhaDeStrings.empilhar("A");
pilhaDeStrings.empilhar("B");
console.log(pilhaDeStrings.desempilhar()); // Saída: "B"
