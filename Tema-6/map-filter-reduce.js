// Trabajar con métodos mas avanzaod
//.map() .filter() .reduce()

const array=["cdmx","tlaxcala","aguascaliente","texcoco"];

array.forEach(v=>{
    console.log(v)
})

const arrayd=array.map((valor,indice)=> `${indice+1} - ${valor}`
    
)

console.log(arrayd)

//Método .filter()
//filter modifica el array
const lisatObj= [
    {nombre:"Artemio", edad:73},
    {nombre:"Margarita", edad:65},
    {nombre:"Luis", edad:42},
    {nombre:"Raul", edad:38},
    {nombre:"Efren", edad:26},
    {nombre:"Enrique", edad:24},
];

const personasMayor=lisatObj.filter(val=>{
    if(val.edad>26){
        console.log("Mayor de edad");
        return true
    }else{
        console.log("menor de edad");
        return false;
    }
})
console.log(personasMayor)

const personasMayores= lisatObj.filter(obj=> obj.edad >30)
console.log(personasMayores);

const nuevaLista=lisatObj.filter(obj=>obj.nombre !== "Raul");
console.log(nuevaLista);

//.reduce()
//Sirve para obtener el valor  en concreto de una lista
//.reduce() recibe 4 parametros
//.reduce((anterior, actual,indice,arrayOriginal))
const valores=[1,2,3,4,5,6];
const suma= valores.reduce((acomulado,cur,i,valores)=>{
    console.log(acomulado);
    console.log(cur);
    console.log(i);
    console.log(valores);
    return acomulado+cur;

})
console.log(suma)