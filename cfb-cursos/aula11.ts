class Conta {
 public numero:number 
 protected titular:string
      constructor(titular:string){
        this.numero = this.gerarNumeroConta()
        this.titular = titular
      }
        gerarNumeroConta():number{
        return Math.floor(Math.random()*1000)+1
        }
}


class contaPF extends Conta {
 protected cpf:number
    constructor( cpf:number,  titular:string){
      super(titular)
      this.cpf = cpf
      console.log(`conta pf criada: ${titular}`)
    }
}


class contaPj extends Conta {
  protected cnpj:number
  constructor( cnpj:number,  titular:string){
    super(titular)
    this.cnpj = cnpj
    console.log(`conta pf criada: ${titular}`)
  }
}


const conta1 = new contaPF(432,"darick", )

const conta2 = new contaPF(423, "darick", )


console.log(conta2.numero)