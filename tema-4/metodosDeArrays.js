//metodos de listsa o arrays
//como obtener la longitud de un string

let str ="Hola soy un string ";

console.log(str.length);

//obtener partes de cadena de caracteres
//slice() substring()


//slice(numeroInicio,numeroFin)
let str_slice=str.slice(0,5);
console.log(str_slice)
let str_substring=str.substring(0,5);
console.log(str_substring);

let str_substr=str.substr(5,17);
console.log(str_substr)

//remplazar parte del contenido de una cadena de texto

let cadena="hola mi nombre es Enrique";
cadena.replace('Enrique','Brenda');
console.log(cadena.replace('Enrique','Brenda'));

let textoLargo="Tito no es un mono cualquiera. A Tito no le gusta trepar por los arboles y odia comer platanos. Él prefiere pasera por el bosque,oler las flores y recoger las nueces que caen de los árboles."

console.log( textoLargo.replace("los",",cinco"))

//expresiones regulares / g (global) ,remplaza todas las instancias

console.log(textoLargo.replace(/los/g,'cinco'))


