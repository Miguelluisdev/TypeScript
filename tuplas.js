var ResponseFalha = ["Não Encontrado", 404];
var ResponseExitosa = ["{}", 200];
if (ResponseExitosa[1] === 200) {
    var InformacaoLocal = JSON.parse(ResponseExitosa[0]);
    console.log(InformacaoLocal);
}
