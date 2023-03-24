//Cómo unir 2 listra .concat()

const lista1=["hola",2,false,null];
const lista2=[" adios",8,true,undefined]

//.concat() devuelve un nuevo array con lista1 y lista 2
//Pero no modifica los valores de las listas
console.log(lista1[0].concat(lista2[0]));

const lista3=lista1.concat(lista2);
console.log(lista3);

//Cómo unir dos listas con el factor de propagación
const lista4=[...lista1, ...lista2]
console.log(lista4)

//ERROR !! Mal entendido el concepto del factor de propagacion
const lista5=[lista1, lista2];
console.log(lista5 )