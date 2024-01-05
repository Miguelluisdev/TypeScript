interface curso{
  titul:string;
  des: string;
  aula:number;
  maxAlunos?: number;
  abrirCurso(teste:string):void;
}

interface cursoProg extends curso{
  aulas:number;
  maxAlunos?:number;
}

let curso1: curso
let curso2: curso

function abrirCurso(teste:string):void{
  console.log("teste")
}

curso1={titul:"javscript", des:"curso de typescript", aula:100, maxAlunos:50, abrirCurso(teste) {
    
},}


console.log(curso1)