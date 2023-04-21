// Carga de funciones y sobre Carga de funciones

function saludaar(){
    hola();
}

function hola(){
    console.log("hola la funcion hola y me ejecuto dentro de otra funcion");
}

saludaar()

///1.- global()
///2.- saludar() global()
///3.- hola() saludar () global()
///4.- saludar() goblal()
///5.- global()

// function recursivo(){
//     recursivo();
// }
// recursivo()