//sesion 4 Strings (cadena de caracteres)

let str_dbl="comillas dobles";

console.log(str_dbl);

let str_sng='comillas simples';
console.log(str_sng) ;

let entreComillas="el otro dia me dijeron \"este comentario esta bien raro.\"";
console.log(entreComillas);

let masComillas ='mas comentarios "raros"';
console.log(masComillas);

let comillasDobles ="saca la 'basura'";
console.log(comillasDobles)

let conclusion='la mejor manera es usar comillas simples para "mostrar datos con comillas"';
console.log(conclusion);

let names=["maria","brenda","margarita","artemio"];

for(let Name in names){
    let backticks=`comentario con backticks ${names}`;
    console.log(backticks);
}


//plantillas html
let html =`
    <div>
        <h1>TiPágina de  ${names} </h1>
        <br />
        <p>Este es un parrago</p>
    </div>

`
console.log(html);

///// introduccion de variables html

let libros=["Empieza por el porque","El monje que vendio su ferrari", "El poder de la hora"];

