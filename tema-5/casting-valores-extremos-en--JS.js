// Operador .valueOf() - obtner valores numericos a partir de la literales 
let a = 2;
let b= new Number(3);
console.log(a);
console.log(a+b);
console.log(a.valueOf()+b.valueOf());

console.log(b.valueOf())

let str= new String("Hola soy un string")
console.log(str);
console.log(str.valueOf());
//NaN - Infinity
//(NaNNot a Number
let n=Number("Hola");
console.log(n);
console.log(isNaN(n));
let numerador=19;
let divisor =0;
let div21=null;
console.log(numerador/divisor);
console.log(numerador/div21)
//Cómo convertir los String a valores numéricos con Numbre, parseInt y parseFloat
let numero="5.89";
let num2=17.2;
console.log(typeof numero);
console.log(numero + num2)//error de concepto
console.log(Number(numero) + num2);

//parse int
//parse  ≠ significa extruir un valor dentro de otro
console.log(parseInt(numero));
console.log(parseFloat(numero));
//Números hexadecimales (base 16) "0x"
let numHex="0x3a5b7";
console.log(parseInt(numHex,16));
//como obtener los valores máximo y mínimo en JavaScript
let min = Number.EPSILON;
let min_valor_js=Number.MIN_VALUE;
let max_valor_js=Number.MAX_VALUE;
console.log(min);
console.log(min_valor_js);
console.log(max_valor_js);
console.log(2**1023.9999999999999)
