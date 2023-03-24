//Comos trabajar con (listas, arrays, vectores)
let variable=45
let array=[variable,1,"2",false,{id:"hola"},null, undefined];

console.log(array);

//acceder a los valores de un array atrvez de su posicion
//array[indice]=>0,1,2,3,4,5,6
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);

//metodos parea introducir nuevos valores en nuestros arrays
//.push() .unshift() => Mutan el valor de nuesetro arry

//Valores al final => .push()
console.log(array.push("final"));
console.log(array);

//Valores al pincipio del array
array.unshift("inicio","nombre");
console.log(array);

//Metodos para eliminar valors de nuestro arrays
//.pop() .shift() => Mutan el valor del array

//Valor del final 
array.pop("final");
console.log(array);

//Valor inicial
array.shift("inicio");
console.log(array);

//Método para eliminar, modificar o añadir valors en nuestro array(x,y,z)
//.splice()
let array3=[1,2,3,4,5,6];
//array.splice(numero de inicio, cantidad de numeros a eliminar)

//Eliminar valres
array3.splice(4,1)
console.log(array3);//[1,4,5,6]

//Añadir valors con splice(indice,,0,valores);

array3.splice(1,0,7,8,9);
console.log(array3);

//Modificar valores .splice(indice, 1, valores)

array3.splice(2,1,3);
console.log(array3);