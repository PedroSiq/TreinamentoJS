const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);
listaDeDestinos.push(`Curitiba`);
const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio De Janeiro";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);
const podeComprar = idadeComprador>=18 || estaAcompanhada;
let contador = 0;
let destinoExiste = false;
while(contador<3){
    if(listaDeDestinos[contador]==destino){
        destinoExiste = true;
        break;
    }
    contador++;
}
console.log("Destino existe: ", destinoExiste);
