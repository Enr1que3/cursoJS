//Trabajando con fechas en javascript

const fecha = new Date();
console.log(fecha);
//Atención los meses inicializan en 0-enero 11-diciembre
const fecha2 = new Date(1999,1,12)
console.log(fecha2);

const fecha3 = new Date(-10000000000000)//milisegundos
console.log(fecha3);

//Fechas a traves de Strings 
const fecha4 = new Date("October 17, 1957,10:15:15 ")
console.log(fecha4);

const fecha5 = new Date(1987,10,20,1,23,52,192)
console.log(fecha5)
//Comparar fechas 
console.log(fecha > fecha2)

console.log(fecha2 === fecha5)//error no se pueden comparar fechas de manera
//obtener milisegundo apartir de una fecha
console.log(fecha2.getTime()=== fecha5.getTime()) // Ok- Esta es la forma de comparar la igualdad entre fechas

//Obtener el día, el mes y el año de una fecha

//Obtener la fecha
console.log(fecha2.getDate())
//.getMonth()

console.log(fecha2.getMonth()+1);
//Obtener el año .getFullYear()

console.log(fecha2.getFullYear());

console.log(fecha2)
//.toLocaleDateString
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("en-US"));//2/12/1999