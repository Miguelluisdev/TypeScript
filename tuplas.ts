

const ResponseFalha = ["Não Encontrado", 404];


const ResponseExitosa: [string, number] = ["{}", 200];


if (ResponseExitosa[1] === 200) {
  const InformacaoLocal = JSON.parse(ResponseExitosa[0]);
  console.log(InformacaoLocal);
}

