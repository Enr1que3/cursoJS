
const nombre="Enrique";
const edad = 23;
const desarrollador = true;
const nacimento = new Date("1999,2,12");

console.log(nombre,edad,desarrollador);
console.log(nacimento);


const fecha_libro=new Date("1981,5");
const libro_favorito ={
    autor:"Bjarne Stroustrup",
    titulo:"The C++ programmaing language",
    fecha:fecha_libro,
};
console.log(libro_favorito.fecha);