//Como ordenar array
//.sort() ordenar MODIFICA EL ARRAY

const numeros=[1,5,4,7,2,6,3];
console.log(numeros);
numeros.sort((a,b)=>{
    if(a<b){
        return -1;
    }
    else if(a>b){
        return +1;
    }
    else{// a==0
        return 0;
    }
})
console.log(numeros);

//ordenar numeros numericos
const arraynumerico=[7,5,4,10,80,11,15,4];
arraynumerico.sort((a,b)=> a-b);
console.log(arraynumerico);

//Interesante en arrays de objetos
const nombre=[
    {nombre:"Artermio",edad:73},
    {nombre:"Margarita",edad:65},
    {nombre:"Luis",edad:42},
    {nombre:"Efren",edad:26},
    {nombre:"Enrique",edad:24}
]

nombre.sort((a,b)=>{
    if(a.edad < b.edad){
        return -1;
    }
    else if(a.edad>b.edad){
        return +1;
    }
    else{return 0;}
})
console.log(nombre);

nombre.sort((a,b)=> a.edad-b.edad)
console.log(nombre)