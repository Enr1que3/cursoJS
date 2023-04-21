//Que son la funciones como se declarar y como se utilizan
const nom = "Enrique";
saluar(nom)
function saluar(nombre){
    console.log(nom) 
    console.log(`hola ${nombre}`);
}

let nombre_2="Artemio";
console.log(nombre_2);

despedir(nombre_2);
function despedir(nom){
    nom="Brenda";
    console.log(`adiós ${nom}`)
}

/// 
let persona = {nombre:"juan",apellido:"González"};

saludarPersona(persona);
console.log(objeto);
function saludarPersona(objeto){
    objeto.apellido = "villar";
    console.log(`hola ${objeto.nombre} ${objeto.apellido}`); // hola juan villar
}

//valor por defecto

saluar();
//////

function imprimeNumero(numero = 7){ // paametros por defecto
    console.log(numero); // 9
}
imprimeNumero();

//////
function imprimir(...parametros){
    console.log(parametros);// 1,3,9,2,"hola",{id:0}
}

imprimir(1,3,9,2,"hola",{id:0});

function suma(...nums){
    console.log(typeof( nums));
    //como si fuera un array
    return nums.reduce((a,b)=> a+b);
}

const s = suma(1,2,3,4);

console.log(s)//34

//ambitos de una funcion

let variable = "Hola";

function mult(a=0,b=0){
    console.log(variable)//hola
    let variable_interna = "adios";
    return a*b;
}

console.log(variable_interna)// variable_interna is undefined

console.log(mult(4,9))//36