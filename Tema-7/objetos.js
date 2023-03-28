//Trabajando con objetos

const obj= {
    id:4,
    nombre:"Enrique",
    apellido:"cuamatzi",
    isDeveloper:true,
    libroFav:["El método","el código enigma"],
    "4-juegos":[1,2,3,4],
};

console.log(obj.isDeveloper)
const prop = "nombre";
console.log(obj[prop]);
const obj2= obj;
console.log(obj2);
obj2.nombre= "julian";
console.log(obj2);
console.log(obj.nombre);

let val1 = 4 ;
let val2 = val1;
val2 = 6;
console.log(val1);
console.log(val2);

const obj3 = {...obj};
console.log(obj3.nombre);
console.log(obj3.nombre);

obj3.nombre = "Efren";
console.log(obj.nombre);
console.log(obj3.nombre);

// Cómo ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    {titulo:"lo que el viento se llevó",anio:1939},
    {titulo:"titanic",anio:1997},
    {titulo:"moana",anio:2016},
    {title:"Shrek 2 ",anio:2004},
    {title:"ted",anio:2012}
]
console.log(listaPeliculas);
//.sort() -> muta el valor de la lista original
listaPeliculas.sort((a,b)=>a.titulo-b.titulo)
console.log(listaPeliculas);


