//metodos de cadenas de texto (parte 3)
//https://regexr.com
let textoLargo="Tito no es un mono cualquiera. A Tito no le gusta trepar por los arboles y odia comer platanos. Él prefiere pasera por el bosque, oler las flores y recoger las nueces que caen de los árboles."
console.log(textoLargo.match(/no/g)); 
//existe la palabra dentro del texto
console.log(textoLargo.includes("E"))

//saber si un texto empieza con una palabra
console.log(textoLargo.startsWith("Tito"))
//saber si un texto termina con una palabra 
console.log(textoLargo.endsWith("árboles."))