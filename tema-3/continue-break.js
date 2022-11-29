let lista =[1,2,3,4,5,6,7,8];

for (let i=0;i<lista.length;i++){
    if (lista[i]=== 3){
        console.log(lista[i]);
        continue
    }
    if(lista[i]>5){
        console.log(lista[i]);
        break;
    }
    console.log(lista[i]);
}

//ambito de un bucle
console.log( lista.concat("hola"));