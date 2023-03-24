//Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let mercado=["huevo","azucar","sopa","sal","acite"];
console.log(mercado)
//Modifica la lista de la compra y añádele "Aceite de Girasol"
let nuevoIngrediente = mercado.unshift("aceite de girasol");
console.log(nuevoIngrediente)

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
let eliminaIngrediente = mercado.shift("aceite de girasol")

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {
        title:"harry potter",director:"Alfonso Cuarón",
        fecha:2005
    },
    {
        title:"Shrek 2",
        director:"Andrew Admson",
        fecha:2004
    },
    {
        title:"El conjuro",director:"James Wan",
        fecha:2013
    }
]

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasRecientes=peliculas.filter(movie=>{
    if(movie.fecha>=2010){
        console.log(movie.fecha)
        return movie.fecha;
        
    }
})
//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(dir=>{
    console.log(dir.director)
    return dir.director;
})

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const autores = [" Alfonso Cuarón"," Andrew Admson","J ames Wan"];
const titulos = [" harry potter"," Shrek 2"," El conjuro"];

const titulosYAutores = autores[1].concat(titulos[1])
console.log(titulosYAutores);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const nuevaLista = [...autores,...directores]
console.log(nuevaLista)