//Métodos modernos de iteracion de listas

const lista=["hola",1,2,3,true,null,"adios"];

for (let i =0;i<=lista.length;i++){
    console.log(lista[i]);
}

lista.forEach(valor=>{
    console.log(valor)
} )

let suma = 0;
const arrayNums=[3,6,2,77,2,3,93,19];
arrayNums.forEach(valorN=>{
    suma += valorN;
    console.log(valorN)
})
console.log(suma);
//busqueda de un valor dentro de una lista .find();

//Quiero encontrar el elemento 3
const  variable = lista.find(val=>{
    if(val === 3);
    return true;
}) 
console.log(variable);

const lisatObj= [
    {nombre:"Artemio", edad:73},
    {nombre:"Margarita", edad:65},
    {nombre:"Luis", edad:42},
    {nombre:"Raul", edad:38},
    {nombre:"Efren", edad:26},
    {nombre:"Enrique", edad:24},
];

// const objeto=lisatObj.find(o=>{
//     if(o.nombre==="Raul"){
//         return true;
//     }
// })


// const objeto=lisatObj.find(o=>{
//     return o.nombre ==="Raul";
// })

const objeto=lisatObj.find(o=> o.nombre ==="Raul"
)
console.log(objeto.edad);

const {edad}= lisatObj.find
