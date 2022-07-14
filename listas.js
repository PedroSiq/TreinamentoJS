// const salvador;
// const saoPaulo = ;
// const rioDeJaneiro =;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);
listaDeDestinos.push(`Curitiba`);
console.log("Destinos possíveis:");
listaDeDestinos.splice(2, 1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[0]);