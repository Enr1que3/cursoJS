//principales operaciones aritmeticas
let a = 3.5;
let b= 4.8;

//suma
console.log(a + b);
// resta
console.log(a-b)
// mult
console.log(a*b)
//Division 
console.log(a/b);
//modulo  (%)
console.log(a%b);

console.log(typeof a);

let a_s = a.toString();//convertir un numero a String 
console.log(typeof a_s)


let c=3.37531;
let d=c*3.15;
console.log(d);

//toFixed()
console.log( d.toFixed(3))//limita el número de decumales al valor X 0 - 20 despues del punto
//toPresicion()

//toPresicion()  limiata el número de cifras significativas y tambien retorna un String
console.log(d.toPrecision(5))
//Representacon de los numeros en cadena de texto
//Redondeo de números decimales 