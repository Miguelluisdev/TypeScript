// Literals são tipos representados por conteúdos específicos
// Variáveis const são automaticamente literals,
// mas variáveis let também podem ser tipadas como literals
var literal;
var pi;
// Não é possível atribuir nenhum valor a um literal
// literal = "Hi, World!"  // produz erro
// pi = 3                  // produz erro
// union types
// Unions são tipos que unem diferentes possibilidades de tipos
// Eles são definidos usando o caracter pipe "|"
var option;
option = 1; // válido
option = "1"; // válido
// Um Alias é um nome personalizado para um tipo e pode ser atribuido a outras variáveis
var homePlanet;
homePlanet = "Terra";
// Também é possível utilizar um Alias para declarar arrays personalizados
var milkyWay;
// Repare que usando um Alias temos acesso ao autocompletar
// dentro do escopo da função e temos um código muito mais 
// limpo que se usássemos a definição inteira do tipo Planet
function checkPlanet(planet) {
    if (planet === "Terra") {
        console.log("Estamos na Terra");
    }
}
// A partir disso podemos anotar esse tipo
function greet(callback) {
    var name = prompt("Qual é o seu nome?");
    callback(name);
}
// E ao definir nosso callback temos acesso às informações
// sobre o seu tipo e retorno para nos auxiliar
greet(function (name) {
    alert("Ol\u00E1, ".concat(name, "! Essa \u00E9 uma sauda\u00E7\u00E3o executada como callback!"));
});
