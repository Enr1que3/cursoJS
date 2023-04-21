// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

function sinParametros(){
    return true;
}

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

setTimeout(()=>{
    console.log("hola soy una promesa");
},5000)
// - Una función generadora de índices pares automáticos

function* generaId(){
    let id=0;
    while(true){
        id++;
        if(id === 10){
            return id;
        }
        yield id;
    }
}

const gen = generaId();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())