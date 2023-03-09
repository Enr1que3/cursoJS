let altura=176; //altura en entimetros int
let altura2=1.76; // altura punto flotante

let peso=84.5;//  peso punto flotante

let alturaRedodeada=altura2;
console.log(Math.round(alturaRedodeada))//2

let pesoRedondeado=peso;
console.log(Math.floor(pesoRedondeado))//84

let maxValor=Number.MAX_VALUE;
let maxValorMas1=Number.MAX_VALUE+1;
console.log(maxValor)

if(maxValor == maxValorMas1){
    console.log("es el miwmo valor")
}
else{
    console.log("no se cumple la condicion")
}