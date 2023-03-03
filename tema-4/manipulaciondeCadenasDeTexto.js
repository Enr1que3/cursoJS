let input='Enrique'
let db='enrique'
console.log(input.toLowerCase() === db)


console.log(db.slice(0,-7))

//formas de concatenacicon

let cadena1='Hola, soy la cadena 1';
let cadena2='Hola, soy la cadena 2';

console.log(cadena1.concat( cadena2))

console.log(`${cadena1}  ${cadena2} `)


//eliminar espacios al inico y al fianl
let str3='   cadena de texto con espacio al final  ';
console.log(str3.length)
//metodo trim
console.log(str3.trim().length)
console.log(str3.trimStart().length)
console.log(str3.trimEnd().length)

//obtener el caracter que hay en cierta posicion

let str4='hola soy el str 4';//["h","o","l","a"," "]
console.log(str4.charAt(3))
console.log(str4[3])

//obtener la posicion de una cadena de caracteres
let str5='Me gustaba Lizbeth SC, pero cuando vi su estado de whats, de Lizbeth, me senti mal y mejor me resigne a dejarla para no sufrir mas';
console.log(str5.indexOf('Lizbeth'))//posicion de la primera letra
console.log(str5.charAt(11))
console.log(str5.lastIndexOf("Lizbeth"))//nos de vuelve la posicion de la ultima letra(Palabra)



