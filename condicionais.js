const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);
listaDeDestinos.push(`Curitiba`);
const idadeComprador = 17;
const estaAcompanhada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);
if(idadeComprador>=18 || estaAcompanhada){
console.log(`Boa viagem!`);
listaDeDestinos.splice(2, 1);
}
else{
console.log(`Não é maior de idade e não posso vender`);
}
console.log(listaDeDestinos);
