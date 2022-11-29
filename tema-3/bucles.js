/* Bucles
while 
do while 
for
 */

for(let i=0; i<10; i=i+1){
    console.log('hola'[0]);
}
let carros =["bmw","audi","mercedes","ferrari","labo"];

for (let i=0;i<carros.length;i=i+1){
    console.log(carros[i]);
}

//For of
for (let i of carros){
    console.log(carros);
}

carros.forEach(valor =>{
    console.log(carros);
});

let persona ={
    nombre:"enrique",
    edad: 23,
    developer: true,
};

for (let i in persona){
    console.log(i);
}